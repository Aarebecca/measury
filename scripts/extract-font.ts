#!/usr/bin/env tsx
/**
 * TTF/OTF/TTC 字体数据提取脚本
 * 
 * 使用方法:
 *   npm run extract <font-file-path> [output-file-path]
 * 
 * 示例:
 *   npm run extract fonts/Roboto-Regular.ttf
 *   npm run extract fonts/Roboto-Regular.ttf src/fonts/roboto.ts
 *   npm run extract fonts/SourceHanSans.ttc --ttc-index 2
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
  /** 字体样式 */
  fontStyle?: 'normal' | 'italic' | 'oblique';
  /** 是否提取 kerning 数据（可能会增加文件大小） */
  includeKerning?: boolean;
  /** 要提取的字符集（如果不指定，则提取所有字形） */
  charset?: string;
  /** 提取的字体名称（内部使用） */
  extractedFontFamily?: string;
  /** 是否只提取常用 Unicode 区块（默认 true） */
  useCommonBlocksOnly?: boolean;
  /** TTC/TTF 集合中的字体索引（0-based） */
  ttcIndex?: number;
}

/**
 * 常用 Unicode 区块定义
 */
const COMMON_UNICODE_BLOCKS = [
  // 基础拉丁文
  { start: 0x0020, end: 0x007E, name: 'Basic Latin' },
  { start: 0x00A0, end: 0x00FF, name: 'Latin-1 Supplement' },
  { start: 0x0100, end: 0x017F, name: 'Latin Extended-A' },
  { start: 0x0180, end: 0x024F, name: 'Latin Extended-B' },
  
  // 希腊文和数学符号
  { start: 0x0370, end: 0x03FF, name: 'Greek and Coptic' },
  { start: 0x2190, end: 0x21FF, name: 'Arrows' },
  { start: 0x2200, end: 0x22FF, name: 'Mathematical Operators' },
  
  // 通用标点和符号
  { start: 0x2000, end: 0x206F, name: 'General Punctuation' },
  { start: 0x2070, end: 0x209F, name: 'Superscripts and Subscripts' },
  { start: 0x20A0, end: 0x20CF, name: 'Currency Symbols' },
  { start: 0x2100, end: 0x214F, name: 'Letterlike Symbols' },
  { start: 0x2150, end: 0x218F, name: 'Number Forms' },
  { start: 0x2300, end: 0x23FF, name: 'Miscellaneous Technical' },
  { start: 0x2460, end: 0x24FF, name: 'Enclosed Alphanumerics' },
  { start: 0x2500, end: 0x257F, name: 'Box Drawing' },
  { start: 0x2580, end: 0x259F, name: 'Block Elements' },
  { start: 0x25A0, end: 0x25FF, name: 'Geometric Shapes' },
  { start: 0x2600, end: 0x26FF, name: 'Miscellaneous Symbols' },
  { start: 0x2700, end: 0x27BF, name: 'Dingbats' },
  
  // 中日韩符号和标点
  { start: 0x3000, end: 0x303F, name: 'CJK Symbols and Punctuation' },
  { start: 0x3040, end: 0x309F, name: 'Hiragana' },
  { start: 0x30A0, end: 0x30FF, name: 'Katakana' },
  { start: 0x3100, end: 0x312F, name: 'Bopomofo' },
  { start: 0x3130, end: 0x318F, name: 'Hangul Compatibility Jamo' },
  { start: 0x31A0, end: 0x31BF, name: 'Bopomofo Extended' },
  { start: 0x31F0, end: 0x31FF, name: 'Katakana Phonetic Extensions' },
  
  // 中日韩统一表意文字
  { start: 0x4E00, end: 0x9FFF, name: 'CJK Unified Ideographs' },
  
  // 韩文
  { start: 0xAC00, end: 0xD7AF, name: 'Hangul Syllables' },
  
  // 全角字符
  { start: 0xFF00, end: 0xFFEF, name: 'Halfwidth and Fullwidth Forms' },
  
  // Emoji (基础)
  { start: 0x1F300, end: 0x1F5FF, name: 'Miscellaneous Symbols and Pictographs' },
  { start: 0x1F600, end: 0x1F64F, name: 'Emoticons' },
  { start: 0x1F680, end: 0x1F6FF, name: 'Transport and Map Symbols' },
  { start: 0x1F900, end: 0x1F9FF, name: 'Supplemental Symbols and Pictographs' },
];

interface TtcInfo {
  index: number;
  count: number;
}

interface TableEntry {
  tag: string;
  checkSum: number;
  offset: number;
  length: number;
}

interface TableDirectory {
  sfntVersion: number;
  numTables: number;
  searchRange: number;
  entrySelector: number;
  rangeShift: number;
  tables: TableEntry[];
}

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

function readTag(data: DataView, offset: number): string {
  return String.fromCharCode(
    data.getUint8(offset),
    data.getUint8(offset + 1),
    data.getUint8(offset + 2),
    data.getUint8(offset + 3)
  );
}

function writeTag(view: DataView, offset: number, tag: string): void {
  for (let i = 0; i < 4; i++) {
    view.setUint8(offset + i, tag.charCodeAt(i) || 0);
  }
}

function align4(value: number): number {
  return (value + 3) & ~3;
}

function parseTableDirectory(data: DataView, fontOffset: number): TableDirectory {
  const sfntVersion = data.getUint32(fontOffset, false);
  const numTables = data.getUint16(fontOffset + 4, false);
  const searchRange = data.getUint16(fontOffset + 6, false);
  const entrySelector = data.getUint16(fontOffset + 8, false);
  const rangeShift = data.getUint16(fontOffset + 10, false);

  const tables: TableEntry[] = [];
  let recordOffset = fontOffset + 12;
  for (let i = 0; i < numTables; i++) {
    const tag = readTag(data, recordOffset);
    const checkSum = data.getUint32(recordOffset + 4, false);
    const offset = data.getUint32(recordOffset + 8, false);
    const length = data.getUint32(recordOffset + 12, false);
    tables.push({ tag, checkSum, offset, length });
    recordOffset += 16;
  }

  return {
    sfntVersion,
    numTables,
    searchRange,
    entrySelector,
    rangeShift,
    tables,
  };
}

function detectTtcTableOffsetBase(data: DataView, fontOffset: number, tables: TableEntry[], bufferLength: number): number {
  const headEntry = tables.find((table) => table.tag === 'head');
  const isHeadVersion = (value: number | null) => value === 0x00010000 || value === 0x00020000;

  if (headEntry) {
    const absOffset = headEntry.offset;
    const relOffset = fontOffset + headEntry.offset;
    const absValid = absOffset + headEntry.length <= bufferLength;
    const relValid = relOffset + headEntry.length <= bufferLength;
    const absVersion = absValid ? data.getUint32(absOffset, false) : null;
    const relVersion = relValid ? data.getUint32(relOffset, false) : null;

    if (isHeadVersion(absVersion) && !isHeadVersion(relVersion)) {
      return 0;
    }
    if (!isHeadVersion(absVersion) && isHeadVersion(relVersion)) {
      return fontOffset;
    }
  }

  return 0;
}

function buildSfntBuffer(data: DataView, directory: TableDirectory, offsetBase: number): ArrayBuffer {
  let cursor = 12 + directory.numTables * 16;
  const tablesWithOffsets = directory.tables.map((table) => {
    cursor = align4(cursor);
    const newOffset = cursor;
    cursor += table.length;
    return { ...table, newOffset };
  });

  const output = new ArrayBuffer(cursor);
  const view = new DataView(output);
  view.setUint32(0, directory.sfntVersion, false);
  view.setUint16(4, directory.numTables, false);
  view.setUint16(6, directory.searchRange, false);
  view.setUint16(8, directory.entrySelector, false);
  view.setUint16(10, directory.rangeShift, false);

  let recordOffset = 12;
  for (const table of tablesWithOffsets) {
    writeTag(view, recordOffset, table.tag);
    view.setUint32(recordOffset + 4, table.checkSum, false);
    view.setUint32(recordOffset + 8, table.newOffset, false);
    view.setUint32(recordOffset + 12, table.length, false);
    recordOffset += 16;
  }

  const source = new Uint8Array(data.buffer);
  const target = new Uint8Array(output);
  for (const table of tablesWithOffsets) {
    const sourceOffset = offsetBase + table.offset;
    if (sourceOffset + table.length > source.length) {
      throw new Error(`Table ${table.tag} exceeds TTC buffer bounds`);
    }
    target.set(source.subarray(sourceOffset, sourceOffset + table.length), table.newOffset);
  }

  return output;
}

function extractTtcFont(buffer: ArrayBuffer, ttcIndex?: number): { fontBuffer: ArrayBuffer; ttcInfo: TtcInfo } {
  const data = new DataView(buffer);
  const signature = readTag(data, 0);
  if (signature !== 'ttcf') {
    throw new Error(`Unsupported TTC signature: ${signature}`);
  }

  const count = data.getUint32(8, false);
  if (count < 1) {
    throw new Error('TTC file contains no fonts');
  }

  const index = ttcIndex ?? 0;
  if (!Number.isInteger(index) || index < 0 || index >= count) {
    throw new Error(`Invalid TTC index ${index}; expected 0-${count - 1}`);
  }

  const fontOffset = data.getUint32(12 + index * 4, false);
  const directory = parseTableDirectory(data, fontOffset);
  const offsetBase = detectTtcTableOffsetBase(data, fontOffset, directory.tables, buffer.byteLength);
  const fontBuffer = buildSfntBuffer(data, directory, offsetBase);

  return { fontBuffer, ttcInfo: { index, count } };
}

function loadFont(input: string, ttcIndex?: number): { font: opentype.Font; ttcInfo?: TtcInfo } {
  const buffer = fs.readFileSync(input);
  const arrayBuffer = toArrayBuffer(buffer);
  const data = new DataView(arrayBuffer);
  const signature = readTag(data, 0);

  if (signature === 'ttcf') {
    const { fontBuffer, ttcInfo } = extractTtcFont(arrayBuffer, ttcIndex);
    return { font: opentype.parse(fontBuffer), ttcInfo };
  }

  return { font: opentype.parse(arrayBuffer) };
}

/**
 * 将字符列表转换为优化的 Unicode 范围
 * @param charsByWidth 按宽度分组的字符映射
 * @param minRangeSize 最小范围大小（默认 10），小于此值的范围将被拆分为单个字符
 */
/**
 * 从 TTF 文件中提取字体数据
 */
function extractFontData(options: ExtractOptions): { code: string; warning: string } {
  const { input, includeKerning = true, charset } = options;

  // 读取字体文件
  const { font, ttcInfo } = loadFont(input, options.ttcIndex);
  if (ttcInfo) {
    const indexNote = options.ttcIndex === undefined && ttcInfo.count > 1
      ? ' (defaulting to index 0)'
      : '';
    console.log(`✓ TTC collection detected: ${ttcInfo.count} fonts, using index ${ttcInfo.index}${indexNote}`);
  }

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
  const useCommonBlocksOnly = options.useCommonBlocksOnly !== false; // 默认 true

  console.log(`Extracting glyphs (total: ${font.glyphs.length})...`);
  if (useCommonBlocksOnly) {
    console.log('Filter mode: Common Unicode blocks only');
  }
  
  let filteredCount = 0;
  
  // 遍历字形
  for (let i = 0; i < font.glyphs.length; i++) {
    const glyph = font.glyphs.get(i);
    if (!glyph.unicode) continue;

    const char = String.fromCodePoint(glyph.unicode);

    // 如果指定了字符集，只提取字符集中的字符
    if (charSet && !charSet.has(char)) continue;

    // 如果启用了常用区块过滤，检查字符是否在常用区块中
    if (useCommonBlocksOnly && glyph.unicode !== undefined) {
      const inCommonBlock = COMMON_UNICODE_BLOCKS.some(
        block => glyph.unicode! >= block.start && glyph.unicode! <= block.end
      );
      
      if (!inCommonBlock) {
        filteredCount++;
        continue;
      }
    }

    // 获取 advance width
    const advanceWidth = glyph.advanceWidth || 0;
    glyphs[char] = advanceWidth;
  }
  console.log(`✓ Extracted ${Object.keys(glyphs).length} glyphs`);
  if (filteredCount > 0) {
    console.log(`✓ Filtered ${filteredCount} rare/combining characters`);
  }

  // 优化：找出高频宽度并移除这些字符
  const widthCounts = new Map<number, number>();
  Object.values(glyphs).forEach((width) => {
    widthCounts.set(width, (widthCounts.get(width) || 0) + 1);
  });

  // 将宽度按出现次数排序
  const sortedWidths = Array.from(widthCounts.entries())
    .sort((a, b) => b[1] - a[1]);

  // 找出高频宽度（出现次数超过总字符数的 5% 的宽度）
  const totalGlyphs = Object.keys(glyphs).length;
  const threshold = Math.max(Math.floor(totalGlyphs * 0.05), 100); // 至少100个字符
  
  // 最常见的作为 defaultWidth
  const defaultWidth = sortedWidths[0]?.[0] || 0;
  const defaultWidthCount = sortedWidths[0]?.[1] || 0;
  
  // 其他高频宽度
  const commonWidths: number[] = [];
  const commonWidthsSet = new Set<number>();
  
  for (let i = 1; i < sortedWidths.length; i++) {
    const [width, count] = sortedWidths[i];
    if (count >= threshold) {
      commonWidths.push(width);
      commonWidthsSet.add(width);
    } else {
      break; // 后面的宽度出现次数更少，不需要再检查
    }
  }

  console.log('✓ Width distribution analysis:');
  console.log(`  Total glyphs: ${totalGlyphs}`);
  console.log(`  Default width: ${defaultWidth} (${defaultWidthCount} glyphs, ${(defaultWidthCount / totalGlyphs * 100).toFixed(1)}%)`);
  if (commonWidths.length > 0) {
    console.log(`  Common widths (threshold: ${threshold} glyphs):`);
    commonWidths.forEach((width, index) => {
      const count = widthCounts.get(width) || 0;
      console.log(`    ${index + 1}. ${width} (${count} glyphs, ${(count / totalGlyphs * 100).toFixed(1)}%)`);
    });
  }

  // 移除使用高频宽度的字符（保留特殊字符和常用字符）
  const commonChars = new Set([
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    ...' .,!?;:\'"()[]{}/-+*=<>@#$%^&_`~|\\',
  ]);

  const optimizedGlyphs: Record<string, number> = {};
  let removedCount = 0;
  const removedByWidth = new Map<number, number>();
  
  // 收集每个高频宽度对应的字符（用于生成 Unicode 范围）
  const charsByWidth = new Map<number, string[]>();
  commonWidths.forEach(width => charsByWidth.set(width, []));

  Object.entries(glyphs).forEach(([char, width]) => {
    // 保留常用字符，或者宽度不是高频宽度的字符
    const isHighFrequencyWidth = width === defaultWidth || commonWidthsSet.has(width);
    if (commonChars.has(char) || !isHighFrequencyWidth) {
      optimizedGlyphs[char] = width;
    } else {
      removedCount++;
      removedByWidth.set(width, (removedByWidth.get(width) || 0) + 1);
      
      // 如果是 commonWidths 中的宽度（非 defaultWidth），收集字符
      if (commonWidthsSet.has(width)) {
        charsByWidth.get(width)!.push(char);
      }
    }
  });

  console.log('✓ Optimization result:');
  console.log(`  Removed ${removedCount} glyphs with high-frequency widths`);
  removedByWidth.forEach((count, width) => {
    console.log(`    - Width ${width}: ${count} glyphs removed`);
  });
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
    fontStyle: options.fontStyle || 'normal',
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
  fontStyle: 'normal' | 'italic' | 'oblique';
}): string {
  const {
    fontFamily,
    unitsPerEm,
    metrics,
    glyphs,
    defaultWidth,
    kerning,
    fontWeight,
    fontStyle,
  } = data;

  const lines: string[] = [];

  lines.push('import type { FontData } from \'../types\';');
  lines.push('');
  lines.push('/**');
  lines.push(` * ${fontFamily}`);
  if (fontWeight) {
    lines.push(` * Font Weight: ${fontWeight}`);
  }
  if (fontStyle && fontStyle !== 'normal') {
    lines.push(` * Font Style: ${fontStyle}`);
  }
  lines.push(' */');
  lines.push('export default {');
  lines.push(`  fontFamily: '${fontFamily}',`);
  lines.push(`  fontWeight: ${typeof fontWeight === 'number' ? fontWeight : `'${fontWeight}'`},`);
  lines.push(`  fontStyle: '${fontStyle}',`);
  lines.push(`  unitsPerEm: ${unitsPerEm},`);
  lines.push('  metrics: {');
  lines.push(`    ascender: ${metrics.ascender},`);
  lines.push(`    descender: ${metrics.descender},`);
  lines.push(`    lineGap: ${metrics.lineGap},`);
  lines.push('  },');

  // 分析字符分布，按宽度分组
  const widthGroups = new Map<number, string[]>();
  Object.entries(glyphs).forEach(([char, width]) => {
    if (!widthGroups.has(width)) {
      widthGroups.set(width, []);
    }
    widthGroups.get(width)!.push(char);
  });

  // 分离压缩格式和普通格式的字符
  const compressedWidths = new Map<number, string>(); // width -> char string
  const normalGlyphs: Record<string, number> = {}; // char -> width

  const sortedWidths = Array.from(widthGroups.keys()).sort((a, b) => a - b);
  for (const width of sortedWidths) {
    const chars = widthGroups.get(width)!;
    
    if (chars.length >= 10) {
      // 字符数量 >= 10，使用压缩格式
      const sortedChars = chars.sort((a, b) => a.codePointAt(0)! - b.codePointAt(0)!);
      const charString = sortedChars.map(escapeChar).join('');
      compressedWidths.set(width, charString);
    } else {
      // 字符数量 < 10，使用普通格式
      for (const char of chars) {
        normalGlyphs[char] = width;
      }
    }
  }

  // 输出 glyphs（如果有普通格式的字符）
  if (Object.keys(normalGlyphs).length > 0) {
    lines.push('  glyphs: {');
    const sortedChars = Object.keys(normalGlyphs).sort((a, b) => {
      return a.codePointAt(0)! - b.codePointAt(0)!;
    });
    for (const char of sortedChars) {
      const width = normalGlyphs[char];
      const escapedChar = escapeChar(char);
      lines.push(`    '${escapedChar}': ${width},`);
    }
    lines.push('  },');
  }

  // 输出 glyphsByWidth（如果有压缩格式的字符）
  if (compressedWidths.size > 0) {
    lines.push('  glyphsByWidth: {');
    const sortedCompressedWidths = Array.from(compressedWidths.keys()).sort((a, b) => a - b);
    for (const width of sortedCompressedWidths) {
      const charString = compressedWidths.get(width)!;
      lines.push(`    ${width}: '${charString}',`);
    }
    lines.push('  },');
  }

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
  const code = char.charCodeAt(0);
  
  // 处理常见转义字符
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
  }
  
  // 处理 Unicode 行分隔符和段落分隔符
  // Line Separator (LS): U+2028
  // Paragraph Separator (PS): U+2029
  // Next Line (NEL): U+0085
  if (code === 0x2028 || code === 0x2029 || code === 0x0085) {
    return `\\u${code.toString(16).toUpperCase().padStart(4, '0')}`;
  }
  
  // 其他控制字符也转义
  if (code < 0x20 || (code >= 0x7F && code <= 0x9F)) {
    return `\\u${code.toString(16).toUpperCase().padStart(4, '0')}`;
  }
  
  return char;
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
 * 字体样式转字符串（用于文件名）
 */
function styleToString(style?: 'normal' | 'italic' | 'oblique'): string {
  if (!style || style === 'normal') return '';
  return style.charAt(0).toUpperCase() + style.slice(1);
}

/**
 * 生成导出名称（用于 index.ts）
 */
function generateExportName(fontFamily: string, fontWeight: string | number, fontStyle?: 'normal' | 'italic' | 'oblique'): string {
  const weightStr = weightToString(fontWeight);
  const styleStr = styleToString(fontStyle);
  // 移除空格和特殊字符
  const familyName = fontFamily.replace(/\s+/g, '');
  return `${familyName}${weightStr}${styleStr}`;
}

/**
 * 生成文件名
 */
function generateFileName(fontFamily: string, fontWeight: string | number, fontStyle?: 'normal' | 'italic' | 'oblique'): string {
  const weightStr = weightToString(fontWeight);
  const styleStr = styleToString(fontStyle);
  // 移除空格，保留连字符
  const familyName = fontFamily.replace(/\s+/g, '');
  const suffix = styleStr ? `-${styleStr}` : '';
  return `${familyName}-${weightStr}${suffix}`;
}

/**
 * 主函数
 */
function main() {
  const argv = minimist(process.argv.slice(2), {
    string: ['weight', 'family', 'charset', 'output', 'style', 'ttc-index'],
    boolean: ['no-kerning', 'no-common-blocks', 'help'],
    alias: {
      w: 'weight',
      f: 'family',
      c: 'charset',
      o: 'output',
      i: 'ttc-index',
      h: 'help',
    },
  });

  if (argv.help || argv._.length === 0) {
    console.log('Usage: npm run extract <font-file> [options]');
    console.log('');
    console.log('Options:');
    console.log('  -w, --weight <weight>         Set font weight (e.g., 400, bold)');
    console.log('  -s, --style <style>           Set font style (normal, italic, oblique)');
    console.log('  -f, --family <name>           Override font family name');
    console.log('  -c, --charset <chars>         Only extract specified characters');
    console.log('  -o, --output <file>           Output file path');
    console.log('  -i, --ttc-index <index>       Font index for .ttc/.ttcf files (0-based)');
    console.log('  --no-kerning                  Skip kerning data extraction');
    console.log('  --no-common-blocks            Extract all Unicode blocks (not recommended)');
    console.log('  -h, --help                    Show this help message');
    console.log('');
    console.log('Examples:');
    console.log('  npm run extract fonts/Roboto-Regular.ttf');
    console.log('  npm run extract fonts/Roboto-Regular.ttf -o src/fonts/roboto.ts');
    console.log('  npm run extract fonts/Arial.ttf --weight 400 --charset "ABC123"');
    console.log('  npm run extract fonts/Roboto-Italic.ttf --style italic');
    console.log('  npm run extract fonts/Font.ttf --no-kerning');
    console.log('  npm run extract fonts/SourceHanSans.ttc --ttc-index 2');
    process.exit(argv.help ? 0 : 1);
  }

  const input = argv._[0];
  const ttcIndexRaw = argv['ttc-index'];
  const ttcIndex = ttcIndexRaw !== undefined ? Number(ttcIndexRaw) : undefined;

  if (ttcIndexRaw !== undefined && (!Number.isFinite(ttcIndex) || !Number.isInteger(ttcIndex))) {
    console.error(`Error: Invalid --ttc-index value: ${ttcIndexRaw}`);
    process.exit(1);
  }
  
  const options: ExtractOptions = {
    input,
    output: argv.output,
    fontFamily: argv.family,
    fontWeight: argv.weight ? (isNaN(Number(argv.weight)) ? argv.weight : Number(argv.weight)) : 400,
    fontStyle: argv.style as 'normal' | 'italic' | 'oblique' | undefined,
    charset: argv.charset,
    includeKerning: !argv['no-kerning'],
    useCommonBlocksOnly: !argv['no-common-blocks'],
    ttcIndex,
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
    const fileName = generateFileName(familyForFileName, options.fontWeight || 400, options.fontStyle);
    options.output = path.join('src', 'fonts', `${fileName}.ts`);
  }

  console.log(`Extracting font data from: ${options.input}`);
  console.log(`Output file: ${options.output}`);
  if (options.fontWeight) {
    console.log(`Font weight: ${options.fontWeight}`);
  }
  if (options.fontStyle) {
    console.log(`Font style: ${options.fontStyle}`);
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
  updateFontsIndex(options.output, options.fontFamily || options.extractedFontFamily || 'Unknown', options.fontWeight || 400, options.fontStyle);
  
  // 在最后输出缺失字符警告（如果有）
  if (warning) {
    console.log(warning);
  }
}

/**
 * 更新 src/fonts/index.ts 以导入新字体
 */
function updateFontsIndex(fontFilePath: string, fontFamily: string, fontWeight: string | number, fontStyle?: 'normal' | 'italic' | 'oblique') {
  const fontsIndexPath = path.join('src', 'fonts', 'index.ts');
  const fileName = path.basename(fontFilePath, '.ts');
  const exportName = generateExportName(fontFamily, fontWeight, fontStyle);

  let indexContent = '';
  if (fs.existsSync(fontsIndexPath)) {
    indexContent = fs.readFileSync(fontsIndexPath, 'utf-8');
  }

  // 检查是否已经导入
  const exportStatement = `export { default as ${exportName} } from './${fileName}.js';`;
  if (!indexContent.includes(exportStatement)) {
    indexContent += `${exportStatement}\n`;
    fs.writeFileSync(fontsIndexPath, indexContent, 'utf-8');
    console.log(`✓ Updated ${fontsIndexPath}`);
  } else {
    console.log(`  ${fontsIndexPath} already includes this font`);
  }
}

// 运行主函数
main();

export { extractFontData, ExtractOptions };
