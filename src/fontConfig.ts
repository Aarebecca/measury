/**
 * Font metrics interface
 */
export interface FontMetrics {
  /** Average character width ratio */
  avgCharWidth: number;
  /** Average character height ratio */
  avgCharHeight: number;
  /** Space character width ratio */
  spaceWidth: number;
  /** Line height ratio */
  lineHeight: number;
}

/**
 * Font configuration storage
 * Stores average character widths and metrics for supported fonts
 */
export class FontConfig {
  private fonts: Map<string, FontMetrics>;

  constructor() {
    this.fonts = new Map();
    this._initializeDefaultFonts();
  }

  /**
   * Initialize with some default font metrics
   * These are approximate values based on common font characteristics
   */
  private _initializeDefaultFonts(): void {
    // Default monospace font metrics
    this.addFont('monospace', {
      avgCharWidth: 0.6, // ratio of character width to font size
      avgCharHeight: 1.2, // ratio of character height to font size
      spaceWidth: 0.6,
      lineHeight: 1.2,
    });

    // Default sans-serif font metrics
    this.addFont('sans-serif', {
      avgCharWidth: 0.5,
      avgCharHeight: 1.2,
      spaceWidth: 0.3,
      lineHeight: 1.2,
    });

    // Default serif font metrics
    this.addFont('serif', {
      avgCharWidth: 0.52,
      avgCharHeight: 1.2,
      spaceWidth: 0.3,
      lineHeight: 1.2,
    });

    // Arial
    this.addFont('Arial', {
      avgCharWidth: 0.5,
      avgCharHeight: 1.2,
      spaceWidth: 0.28,
      lineHeight: 1.2,
    });

    // Times New Roman
    this.addFont('Times New Roman', {
      avgCharWidth: 0.48,
      avgCharHeight: 1.2,
      spaceWidth: 0.25,
      lineHeight: 1.2,
    });

    // Courier New
    this.addFont('Courier New', {
      avgCharWidth: 0.6,
      avgCharHeight: 1.2,
      spaceWidth: 0.6,
      lineHeight: 1.2,
    });
  }

  /**
   * Add or update font metrics
   * @param fontFamily - Font family name
   * @param metrics - Font metrics object
   */
  addFont(fontFamily: string, metrics: FontMetrics): void {
    this.fonts.set(fontFamily.toLowerCase(), metrics);
  }

  /**
   * Get font metrics for a given font family
   * @param fontFamily - Font family name
   * @returns Font metrics or null if not found
   */
  getFont(fontFamily: string): FontMetrics | null {
    return this.fonts.get(fontFamily.toLowerCase()) || null;
  }

  /**
   * Check if a font is configured
   * @param fontFamily - Font family name
   * @returns True if font exists
   */
  hasFont(fontFamily: string): boolean {
    return this.fonts.has(fontFamily.toLowerCase());
  }

  /**
   * Remove a font from configuration
   * @param fontFamily - Font family name
   */
  removeFont(fontFamily: string): void {
    this.fonts.delete(fontFamily.toLowerCase());
  }

  /**
   * Get all configured fonts
   * @returns Array of font family names
   */
  getAllFonts(): string[] {
    return Array.from(this.fonts.keys());
  }
}

export default FontConfig;
