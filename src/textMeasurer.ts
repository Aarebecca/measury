import FontConfig, { FontMetrics } from './fontConfig';

/**
 * Style options for text measurement
 */
export interface TextStyle {
  /** Font size in pixels (can be a number or a string like '16px') */
  fontSize?: number | string;
  /** Font family name */
  fontFamily?: string;
  /** Alternate property name for fontSize (snake_case) */
  font_size?: number | string;
  /** Alternate property name for fontFamily (snake_case) */
  font_family?: string;
}

/**
 * Text measurement result
 */
export interface MeasurementResult {
  /** Estimated text width in pixels */
  width: number;
  /** Estimated text height in pixels */
  height: number;
  /** Line height in pixels */
  lineHeight: number;
  /** Number of lines (based on \n characters) */
  lines: number;
  /** Total height including all lines */
  totalHeight: number;
  /** The font size used for calculation */
  fontSize: number;
}

/**
 * TextMeasurer class for measuring text dimensions
 */
export class TextMeasurer {
  private fontConfig: FontConfig;

  constructor(fontConfig: FontConfig | null = null) {
    this.fontConfig = fontConfig || new FontConfig();
  }

  /**
   * Parse font size from style object or use default
   * @param style - Style object
   * @returns Font size in pixels
   */
  private _parseFontSize(style: TextStyle = {}): number {
    const fontSize = style.fontSize || style.font_size || 16;
    // Handle different formats (16, '16px', '16')
    if (typeof fontSize === 'number') {
      return fontSize;
    }
    return parseInt(fontSize, 10) || 16;
  }

  /**
   * Get font family from style object or use default
   * @param style - Style object
   * @returns Font family name
   */
  private _parseFontFamily(style: TextStyle = {}): string {
    return style.fontFamily || style.font_family || 'sans-serif';
  }

  /**
   * Measure text dimensions
   * @param text - Text to measure
   * @param style - Style object with fontSize, fontFamily, etc.
   * @returns Measurement result with width and height
   */
  measureText(text: string, style: TextStyle = {}): MeasurementResult {
    if (typeof text !== 'string') {
      throw new TypeError('Text must be a string');
    }

    const fontSize = this._parseFontSize(style);
    const fontFamily = this._parseFontFamily(style);

    // Get font metrics from configuration
    const fontMetrics = this.fontConfig.getFont(fontFamily);

    if (!fontMetrics) {
      // Fallback to sans-serif if font not found
      const fallbackMetrics = this.fontConfig.getFont('sans-serif');
      return this._calculateDimensions(text, fontSize, fallbackMetrics!);
    }

    return this._calculateDimensions(text, fontSize, fontMetrics);
  }

  /**
   * Calculate text dimensions based on metrics
   * @param text - Text to measure
   * @param fontSize - Font size in pixels
   * @param metrics - Font metrics
   * @returns Dimensions with width and height
   */
  private _calculateDimensions(
    text: string,
    fontSize: number,
    metrics: FontMetrics
  ): MeasurementResult {
    // Count characters and spaces
    const chars = text.length;
    const spaces = (text.match(/ /g) || []).length;
    const nonSpaceChars = chars - spaces;

    // Calculate width
    const charWidth = nonSpaceChars * fontSize * metrics.avgCharWidth;
    const spaceWidth = spaces * fontSize * metrics.spaceWidth;
    const width = charWidth + spaceWidth;

    // Calculate height
    const height = fontSize * metrics.avgCharHeight;

    // Calculate line height if multiline
    const lines = text.split('\n').length;
    const lineHeight = fontSize * metrics.lineHeight;

    return {
      width: Math.ceil(width),
      height: Math.ceil(height),
      lineHeight: Math.ceil(lineHeight),
      lines,
      totalHeight: Math.ceil(lineHeight * lines),
      fontSize,
    };
  }

  /**
   * Add a custom font to the configuration
   * @param fontFamily - Font family name
   * @param metrics - Font metrics
   */
  addFont(fontFamily: string, metrics: FontMetrics): void {
    this.fontConfig.addFont(fontFamily, metrics);
  }

  /**
   * Get the font configuration instance
   * @returns FontConfig instance
   */
  getFontConfig(): FontConfig {
    return this.fontConfig;
  }
}

export default TextMeasurer;
