#!/usr/bin/env tsx
/**
 * TTF 字体数据提取脚本
 * 
 * 使用方法:
 *   npm run extract <ttf-file-path> [output-file-path]
 * 
 * 示例:
 *   npm run extract fonts/Roboto-Regular.ttf
 *   npm run extract fonts/Roboto-Regular.ttf src/fonts/roboto.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as opentype from 'opentype.js';
import minimist from 'minimist';

interface ExtractOptions {
  /** 输入的 TTF 文件路径 */
  input: string;
  /** 输出的 TypeScript 文件路径 */
  output?: string;
  /** 字体名称（如果不指定，则从字体文件中读取） */
  fontFamily?: string;
  /** 字重 */
  fontWeight?: string | number;
  /** 是否提取 kerning 数据（可能会增加文件大小） */
  includeKerning?: boolean;
  /** 要提取的字符集（如果不指定，则提取所有字形） */
  charset?: string;
  /** 提取的字体名称（内部使用） */
  extractedFontFamily?: string;
}

/**
 * 从 TTF 文件中提取字体数据
 */
function extractFontData(options: ExtractOptions): { code: string; warning: string } {
  const { input, includeKerning = true, charset } = options;

  // 读取字体文件
  const buffer = fs.readFileSync(input);
  const font = opentype.parse(buffer.buffer);

  // 获取字体元数据
  // 如果用户没有指定 fontFamily，则从字体文件中提取
  if (!options.fontFamily) {
    const extractedFamily = 
      font.names.fontFamily?.en ||
      font.names.fullName?.en ||
      'Unknown';
    options.extractedFontFamily = extractedFamily;
  }
  
  // 使用用户指定的 fontFamily 或提取的 fontFamily
  const fontFamily = options.fontFamily || options.extractedFontFamily || 'Unknown';
  
  const unitsPerEm = font.unitsPerEm;

  // 获取垂直度量
  const ascender = font.ascender;
  const descender = font.descender;
  const lineGap = font.tables.hhea.lineGap || 0;

  // 提取字形宽度
  const glyphs: Record<string, number> = {};
  const charSet = charset ? new Set(Array.from(charset)) : null;

  console.log(`Extracting glyphs (total: ${font.glyphs.length})...`);
  // 遍历字形
  for (let i = 0; i < font.glyphs.length; i++) {
    const glyph = font.glyphs.get(i);
    if (!glyph.unicode) continue;

    const char = String.fromCodePoint(glyph.unicode);

    // 如果指定了字符集，只提取字符集中的字符
    if (charSet && !charSet.has(char)) continue;

    // 获取 advance width
    const advanceWidth = glyph.advanceWidth || 0;
    glyphs[char] = advanceWidth;
  }
  console.log(`✓ Extracted ${Object.keys(glyphs).length} glyphs`);

  // 优化：找出最常见的宽度作为 defaultWidth，并移除这些字符
  const widthCounts = new Map<number, number>();
  Object.values(glyphs).forEach((width) => {
    widthCounts.set(width, (widthCounts.get(width) || 0) + 1);
  });

  // 找出出现次数最多的宽度
  let defaultWidth = 0;
  let maxCount = 0;
  widthCounts.forEach((count, width) => {
    if (count > maxCount) {
      maxCount = count;
      defaultWidth = width;
    }
  });

  // 移除使用默认宽度的字符（保留特殊字符和常用字符）
  const commonChars = new Set([
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    ...' .,!?;:\'"()[]{}/-+*=<>@#$%^&_`~|\\',
  ]);

  const optimizedGlyphs: Record<string, number> = {};
  let removedCount = 0;

  Object.entries(glyphs).forEach(([char, width]) => {
    // 保留常用字符或宽度与默认值不同的字符
    if (commonChars.has(char) || width !== defaultWidth) {
      optimizedGlyphs[char] = width;
    } else {
      removedCount++;
    }
  });

  console.log(
    `✓ Optimized: removed ${removedCount} glyphs with default width (${defaultWidth})`
  );
  console.log(`  Remaining glyphs: ${Object.keys(optimizedGlyphs).length}`);

  // 检查关键字符是否缺失（特别是空格）
  const criticalChars = [' ', '\t', '\n', '\r'];
  const missingChars: string[] = [];
  
  criticalChars.forEach(char => {
    if (optimizedGlyphs[char] === undefined) {
      missingChars.push(char);
    }
  });

  // 暂存缺失字符警告，稍后在所有输出最后显示
  let missingCharsWarning = '';
  
  if (missingChars.length > 0) {
    const fontFamilyName = options.fontFamily || options.extractedFontFamily || 'Unknown';
    
    // 构建警告信息
    const charList = missingChars
      .map((char) => {
        const charName =
          char === ' '
            ? 'SPACE'
            : char === '\t'
              ? 'TAB'
              : char === '\n'
                ? 'NEWLINE'
                : char === '\r'
                  ? 'RETURN'
                  : char;
        return `  - U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')} (${charName})`;
      })
      .join('\n');
    
    // 生成浏览器测量代码
    const measureCode = `(async()=>{
const f='${fontFamilyName}';
const s=16,u=${unitsPerEm},c=document.createElement('canvas').getContext('2d');await document.fonts.load(s+'px "'+f+'"');c.font=s+'px "'+f+'"';const g={};${JSON.stringify(missingChars)}.forEach(k=>g[k]=Math.round(c.measureText(k).width/s*u));console.clear();console.log('=== 缺失字符测量结果 ===\\n字体: '+f+'\\n字号: '+s+'px\\nunitsPerEm: '+u+'\\n\\n// 添加到 glyphs 对象:\\n'+JSON.stringify(g,null,2).replace(/^{/,'glyphs: {').replace(/"/g,"'"))})()`;
    
    missingCharsWarning = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  警告：字体缺失关键字符

以下字符在字体文件中不存在，将使用 defaultWidth：
${charList}

📋 请复制以下完整代码到浏览器 Console (test-browser/index.html) 中运行：

${measureCode}

⚠️  注意：运行前请将 fontName 修改为 fonts.css 中定义的字体名称！
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
  }

  // 提取 kerning 数据（仅针对常见字符）
  let kerning: Record<string, number> | undefined;
  if (includeKerning && font.getKerningValue) {
    console.log('Extracting kerning pairs (common characters only)...');
    kerning = {};

    // 仅对常见字符提取 kerning
    const kerningChars = Array.from(commonChars).filter((c) => glyphs[c]);
    const totalPairs = kerningChars.length * kerningChars.length;
    let processedPairs = 0;
    let foundPairs = 0;
    let lastProgress = 0;

    for (let i = 0; i < kerningChars.length; i++) {
      for (let j = 0; j < kerningChars.length; j++) {
        const left = kerningChars[i];
        const right = kerningChars[j];
        const leftGlyph = font.charToGlyph(left);
        const rightGlyph = font.charToGlyph(right);
        const kernValue = font.getKerningValue(leftGlyph, rightGlyph);
        if (kernValue) {
          kerning[left + right] = kernValue;
          foundPairs++;
        }

        processedPairs++;
        // 显示进度（每处理 10% 显示一次）
        const progress = Math.floor((processedPairs / totalPairs) * 100);
        if (progress >= lastProgress + 10) {
          console.log(`  Progress: ${progress}% (${foundPairs} pairs found)`);
          lastProgress = progress;
        }
      }
    }

    // 如果没有提取到任何 kerning 数据，则不包含 kerning 字段
    if (Object.keys(kerning).length === 0) {
      console.log('✓ No kerning pairs found');
      kerning = undefined;
    } else {
      console.log(`✓ Extracted ${Object.keys(kerning).length} kerning pairs`);
    }
  } else if (includeKerning) {
    console.log('⚠ Font does not support kerning');
  } else {
    console.log('⊘ Skipping kerning extraction');
  }

  // 生成 TypeScript 代码
  const code = generateTypeScriptCode({
    fontFamily,
    unitsPerEm,
    metrics: {
      ascender,
      descender,
      lineGap,
    },
    glyphs: optimizedGlyphs,
    defaultWidth,
    kerning,
    fontWeight: options.fontWeight || 400,
  });

  return { code, warning: missingCharsWarning };
}

/**
 * 生成 TypeScript 代码
 */
function generateTypeScriptCode(data: {
  fontFamily: string;
  unitsPerEm: number;
  metrics: {
    ascender: number;
    descender: number;
    lineGap: number;
  };
  glyphs: Record<string, number>;
  defaultWidth?: number;
  kerning?: Record<string, number>;
  fontWeight: string | number;
}): string {
  const {
    fontFamily,
    unitsPerEm,
    metrics,
    glyphs,
    defaultWidth,
    kerning,
    fontWeight,
  } = data;

  const lines: string[] = [];

  lines.push('import type { FontData } from \'../types\';');
  lines.push('');
  lines.push('/**');
  lines.push(` * ${fontFamily}`);
  if (fontWeight) {
    lines.push(` * Font Weight: ${fontWeight}`);
  }
  lines.push(' */');
  lines.push('export default {');
  lines.push(`  fontFamily: '${fontFamily}',`);
  lines.push(`  fontWeight: ${typeof fontWeight === 'number' ? fontWeight : `'${fontWeight}'`},`);
  lines.push(`  unitsPerEm: ${unitsPerEm},`);
  lines.push('  metrics: {');
  lines.push(`    ascender: ${metrics.ascender},`);
  lines.push(`    descender: ${metrics.descender},`);
  lines.push(`    lineGap: ${metrics.lineGap},`);
  lines.push('  },');
  lines.push('  glyphs: {');

  // 输出字形数据（按字符代码排序）
  const sortedChars = Object.keys(glyphs).sort((a, b) => {
    return a.codePointAt(0)! - b.codePointAt(0)!;
  });

  for (const char of sortedChars) {
    const advance = glyphs[char];
    const escapedChar = escapeChar(char);
    lines.push(`    '${escapedChar}': ${advance},`);
  }

  lines.push('  },');

  // 输出 defaultWidth
  if (defaultWidth !== undefined && defaultWidth !== 0) {
    lines.push(`  defaultWidth: ${defaultWidth},`);
  }

  // 输出 kerning 数据
  if (kerning && Object.keys(kerning).length > 0) {
    lines.push('  kerning: {');
    const sortedPairs = Object.keys(kerning).sort();
    for (const pair of sortedPairs) {
      const value = kerning[pair];
      const escapedPair = Array.from(pair).map(escapeChar).join('');
      lines.push(`    '${escapedPair}': ${value},`);
    }
    lines.push('  },');
  }

  lines.push('} satisfies FontData;');
  lines.push('');

  return lines.join('\n');
}

/**
 * 转义特殊字符
 */
function escapeChar(char: string): string {
  switch (char) {
  case '\'':
    return '\\\'';
  case '\\':
    return '\\\\';
  case '\n':
    return '\\n';
  case '\r':
    return '\\r';
  case '\t':
    return '\\t';
  default:
    return char;
  }
}

/**
 * 将字重转换为字符串格式（用于文件名）
 */
function weightToString(weight: string | number): string {
  const weightMap: Record<number, string> = {
    100: 'Thin',
    200: 'ExtraLight',
    300: 'Light',
    400: 'Regular',
    500: 'Medium',
    600: 'SemiBold',
    700: 'Bold',
    800: 'ExtraBold',
    900: 'Black',
  };
  
  if (typeof weight === 'number') {
    return weightMap[weight] || `${weight}`;
  }
  
  // 如果是字符串，首字母大写
  return weight.charAt(0).toUpperCase() + weight.slice(1);
}

/**
 * 生成导出名称（用于 index.ts）
 */
function generateExportName(fontFamily: string, fontWeight: string | number): string {
  const weightStr = weightToString(fontWeight);
  // 移除空格和特殊字符
  const familyName = fontFamily.replace(/\s+/g, '');
  return `${familyName}${weightStr}`;
}

/**
 * 生成文件名
 */
function generateFileName(fontFamily: string, fontWeight: string | number): string {
  const weightStr = weightToString(fontWeight);
  // 移除空格，保留连字符
  const familyName = fontFamily.replace(/\s+/g, '');
  return `${familyName}-${weightStr}`;
}

/**
 * 主函数
 */
function main() {
  const argv = minimist(process.argv.slice(2), {
    string: ['weight', 'family', 'charset', 'output'],
    boolean: ['no-kerning', 'help'],
    alias: {
      w: 'weight',
      f: 'family',
      c: 'charset',
      o: 'output',
      h: 'help',
    },
  });

  if (argv.help || argv._.length === 0) {
    console.log('Usage: npm run extract <ttf-file> [options]');
    console.log('');
    console.log('Options:');
    console.log('  -w, --weight <weight>      Set font weight (e.g., 400, bold)');
    console.log('  -f, --family <name>        Override font family name');
    console.log('  -c, --charset <chars>      Only extract specified characters');
    console.log('  -o, --output <file>        Output file path');
    console.log('  --no-kerning               Skip kerning data extraction');
    console.log('  -h, --help                 Show this help message');
    console.log('');
    console.log('Examples:');
    console.log('  npm run extract fonts/Roboto-Regular.ttf');
    console.log('  npm run extract fonts/Roboto-Regular.ttf -o src/fonts/roboto.ts');
    console.log('  npm run extract fonts/Arial.ttf --weight 400 --charset "ABC123"');
    console.log('  npm run extract fonts/Font.ttf --no-kerning');
    process.exit(argv.help ? 0 : 1);
  }

  const input = argv._[0];
  
  const options: ExtractOptions = {
    input,
    output: argv.output,
    fontFamily: argv.family,
    fontWeight: argv.weight ? (isNaN(Number(argv.weight)) ? argv.weight : Number(argv.weight)) : 400,
    charset: argv.charset,
    includeKerning: !argv['no-kerning'],
  };

  // 检查输入文件是否存在
  if (!fs.existsSync(options.input)) {
    console.error(`Error: File not found: ${options.input}`);
    process.exit(1);
  }

  // 提取字体数据（需要先提取以获取 fontFamily）
  console.log('Reading font file...');
  const startTime = Date.now();
  const { code, warning } = extractFontData(options);
  const extractTime = Date.now() - startTime;
  console.log(`✓ Font data extracted in ${extractTime}ms`);

  // 确定输出路径（在提取数据后，以便使用提取的 fontFamily）
  if (!options.output) {
    // 优先使用用户指定的 fontFamily，否则使用提取的 fontFamily
    const familyForFileName = options.fontFamily || options.extractedFontFamily || 'Unknown';
    const fileName = generateFileName(familyForFileName, options.fontWeight || 400);
    options.output = path.join('src', 'fonts', `${fileName}.ts`);
  }

  console.log(`Extracting font data from: ${options.input}`);
  console.log(`Output file: ${options.output}`);
  if (options.fontWeight) {
    console.log(`Font weight: ${options.fontWeight}`);
  }
  if (options.charset) {
    console.log(`Character set: ${options.charset.length} characters`);
  }
  console.log('');

  // 创建输出目录
  const outputDir = path.dirname(options.output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 写入文件
  console.log('Writing output file...');
  fs.writeFileSync(options.output, code, 'utf-8');
  console.log(`✓ File written: ${options.output}`);
  console.log(`  File size: ${(code.length / 1024).toFixed(2)} KB`);
  console.log('');

  // 更新 src/fonts/index.ts
  updateFontsIndex(options.output, options.fontFamily || options.extractedFontFamily || 'Unknown', options.fontWeight || 400);
  
  // 在最后输出缺失字符警告（如果有）
  if (warning) {
    console.log(warning);
  }
}

/**
 * 更新 src/fonts/index.ts 以导入新字体
 */
function updateFontsIndex(fontFilePath: string, fontFamily: string, fontWeight: string | number) {
  const fontsIndexPath = path.join('src', 'fonts', 'index.ts');
  const fileName = path.basename(fontFilePath, '.ts');
  const exportName = generateExportName(fontFamily, fontWeight);

  let indexContent = '';
  if (fs.existsSync(fontsIndexPath)) {
    indexContent = fs.readFileSync(fontsIndexPath, 'utf-8');
  }

  // 检查是否已经导入
  const exportStatement = `export { default as ${exportName} } from './${fileName}';`;
  if (!indexContent.includes(exportStatement)) {
    indexContent += `${exportStatement}\n`;
    fs.writeFileSync(fontsIndexPath, indexContent, 'utf-8');
    console.log(`✓ Updated ${fontsIndexPath}`);
  } else {
    console.log(`  ${fontsIndexPath} already includes this font`);
  }
}

// 运行主函数
if (require.main === module) {
  main();
}

export { extractFontData, ExtractOptions };
