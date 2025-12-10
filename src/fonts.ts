import type { FontData } from './types';

// 字体注册表：family -> weight -> FontData
const fontRegistry = new Map<string, Map<string, FontData>>();

// 默认字体
let defaultFontFamily = 'sans-serif';

/**
 * 通用降级字体数据
 * 用于未注册的字体，提供基本的估算能力
 * 基于常见西文字体的平均值
 */
const fallbackFontData: FontData = {
  fontFamily: 'sans-serif',
  fontWeight: 400,
  unitsPerEm: 1000,
  metrics: {
    ascender: 950,
    descender: -250,
    lineGap: 0,
  },
  glyphs: {
    // ASCII 字符的平均宽度（基于 Arial/Helvetica）
    ' ': 278,
    '!': 278, '"': 355, '#': 556, '$': 556, '%': 889, '&': 667, '\'': 191,
    '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
    '0': 556, '1': 556, '2': 556, '3': 556, '4': 556, '5': 556, '6': 556, '7': 556,
    '8': 556, '9': 556, ':': 278, ';': 278, '<': 584, '=': 584, '>': 584, '?': 556,
    '@': 1015, 'A': 667, 'B': 667, 'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778,
    'H': 722, 'I': 278, 'J': 500, 'K': 667, 'L': 556, 'M': 833, 'N': 722, 'O': 778,
    'P': 667, 'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944,
    'X': 667, 'Y': 667, 'Z': 611, '[': 278, '\\': 278, ']': 278, '^': 469, '_': 556,
    '`': 333, 'a': 556, 'b': 556, 'c': 500, 'd': 556, 'e': 556, 'f': 278, 'g': 556,
    'h': 556, 'i': 222, 'j': 222, 'k': 500, 'l': 222, 'm': 833, 'n': 556, 'o': 556,
    'p': 556, 'q': 556, 'r': 333, 's': 500, 't': 278, 'u': 556, 'v': 500, 'w': 722,
    'x': 500, 'y': 500, 'z': 500, '{': 334, '|': 260, '}': 334, '~': 584,
    // 中文字符使用全角宽度（em）
    '中': 1000, '文': 1000,
  },
};

/**
 * 归一化字重值
 */
function normalizeWeight(weight?: string | number): string {
  if (weight === undefined || weight === 'normal') return '400';
  if (weight === 'bold') return '700';
  
  // 处理命名字重
  const namedWeights: Record<string, string> = {
    'thin': '100',
    'hairline': '100',
    'extra-light': '200',
    'ultra-light': '200',
    'light': '300',
    'regular': '400',
    'medium': '500',
    'semi-bold': '600',
    'semibold': '600',
    'demi-bold': '600',
    'demibold': '600',
    'extra-bold': '800',
    'extrabold': '800',
    'ultra-bold': '800',
    'ultrabold': '800',
    'black': '900',
    'heavy': '900',
    'extra-black': '950',
    'extrablack': '950',
    'ultra-black': '950',
    'ultrablack': '950',
    'bolder': '900',
    'lighter': '300',
  };

  if (typeof weight === 'string') {
    const normalized = weight.toLowerCase();
    return namedWeights[normalized] || weight;
  }

  return String(weight);
}

/**
 * 注册字体数据
 */
export function registerFont(data: FontData): void {
  const family = data.fontFamily;
  const normalizedWeight = normalizeWeight(data.fontWeight);

  // 如果使用了 glyphsByWidth 压缩格式，需要展开到 glyphs
  if (data.glyphsByWidth) {
    const expandedGlyphs: Record<string, number> = { ...(data.glyphs || {}) };
    
    for (const [widthOrChar, valueOrWidth] of Object.entries(data.glyphsByWidth)) {
      if (typeof valueOrWidth === 'string') {
        // 这是压缩格式：width -> characters string
        const width = Number(widthOrChar);
        for (const char of valueOrWidth) {
          expandedGlyphs[char] = width;
        }
      } else {
        // 这是单个字符映射：char -> width (向后兼容)
        expandedGlyphs[widthOrChar] = valueOrWidth;
      }
    }
    
    // 创建新的 fontData 对象，用展开后的 glyphs 替换原来的
    data = {
      ...data,
      glyphs: expandedGlyphs,
      // 移除 glyphsByWidth，节省运行时内存
      glyphsByWidth: undefined,
    };
  }

  if (!fontRegistry.has(family)) {
    fontRegistry.set(family, new Map());
  }

  const familyMap = fontRegistry.get(family)!;
  familyMap.set(normalizedWeight, data);
}

/**
 * 设置默认字体
 */
export function setDefaultFontFamily(fontFamily: string): void {
  defaultFontFamily = fontFamily;
}

/**
 * 获取字体数据
 * @param family 字体名称，未指定时使用默认字体
 * @param weight 字重，未指定时使用 normal (400)
 */
export function getFontData(
  family?: string,
  weight?: string | number
): FontData {
  const targetFamily = family || defaultFontFamily;
  const normalizedWeight = normalizeWeight(weight);

  const familyMap = fontRegistry.get(targetFamily);
  if (!familyMap) {
    console.warn(`Font family "${targetFamily}" not registered, using fallback font data`);
    return fallbackFontData;
  }

  // 优先使用精确匹配的字重
  let fontData = familyMap.get(normalizedWeight);
  if (fontData) return fontData;

  // 如果找不到，尝试使用 400（normal）
  fontData = familyMap.get('400');
  if (fontData) return fontData;

  // 如果还找不到，使用该 family 下的第一个可用字重
  const firstWeight = familyMap.values().next().value;
  if (firstWeight) return firstWeight;

  throw new Error(
    `No font data found for family "${targetFamily}" with weight "${normalizedWeight}"`
  );
}
