export interface TextStyle {
  /** 字号 */
  fontSize?: number;
  /** 字体 */
  fontFamily?: string;
  /** 字重 */
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  /** 字体样式 */
  fontStyle?: 'normal' | 'italic' | 'oblique';
  /** 文本转换 */
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  /** 字间距 (px) - 额外增加到每个字符的 advance 之后 */
  letterSpacing?: number;
  /** 词间距 (px) - 额外增加到空格字符的 advance 之后 */
  wordSpacing?: number;
  /**
   * 行高
   * - number: 倍数 (如 1.5 倍字号)
   * - PixelValue: 固定像素值
   * - PercentValue: 基于字号的百分比
   */
  lineHeight?: number | PercentValue | PixelValue;
}

export interface TextMetrics {
  /** 文本宽度 */
  width: number;
  /** 文本高度（即行高） */
  height: number;
  /** 基线 */
  baseline: number;
}

export interface FontData {
  fontFamily: string;
  /** 字重 */
  fontWeight: string | number;
  /** 归一化基准，如 1000 或 2048 */
  unitsPerEm: number;

  /** 全局垂直度量 */
  metrics: {
    /** 基线以上高度 */
    ascender: number;
    /** 基线以下深度 */
    descender: number;
    /** 行间距 */
    lineGap?: number;
  };

  /** 字形表 */
  glyphs: {
    /** 直接存 xadv 数值 */
    [char: string]: number;
  };
  /** 如果字符在 glyphs 中找不到，且不满足特殊规则时，使用此宽度 */
  defaultWidth?: number;

  /** 可选：字距调整 */
  kerning?: { [pair: string]: number };
}

type PercentValue = {
  type: 'percent';
  value: number;
};

type PixelValue = {
  type: 'pixel';
  value: number;
};
