export interface TextStyle {
  /** 字号 */
  fontSize?: number;
  /** 字体 */
  fontFamily?: string;
  /** 字重 */
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  /** 字体样式 */
  fontStyle?: 'normal' | 'italic' | 'oblique';
  /** 字间距 (px) */
  letterSpacing?: number;
  /** 词间距 (px) */
  wordSpacing?: number;
  /** 行高 */
  lineHeight?: PercentValue | PixelValue;
}

export interface Metrics {
  /** 总宽度 */
  width: number;
  /** 总高度 */
  height: number;
  /** 行数 */
  lines: number;
  /** 单行高度 */
  lineHeight: number;
}

type PercentValue = {
  type: 'percent';
  value: number;
};

type PixelValue = {
  type: 'pixel';
  value: number;
};
