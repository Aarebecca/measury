/**
 * Font configuration storage
 * Stores average character widths and metrics for supported fonts
 */
class FontConfig {
  constructor() {
    this.fonts = new Map();
    this._initializeDefaultFonts();
  }

  /**
   * Initialize with some default font metrics
   * These are approximate values based on common font characteristics
   */
  _initializeDefaultFonts() {
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
   * @param {string} fontFamily - Font family name
   * @param {Object} metrics - Font metrics object
   * @param {number} metrics.avgCharWidth - Average character width ratio
   * @param {number} metrics.avgCharHeight - Average character height ratio
   * @param {number} metrics.spaceWidth - Space character width ratio
   * @param {number} metrics.lineHeight - Line height ratio
   */
  addFont(fontFamily, metrics) {
    this.fonts.set(fontFamily.toLowerCase(), metrics);
  }

  /**
   * Get font metrics for a given font family
   * @param {string} fontFamily - Font family name
   * @returns {Object|null} Font metrics or null if not found
   */
  getFont(fontFamily) {
    return this.fonts.get(fontFamily.toLowerCase()) || null;
  }

  /**
   * Check if a font is configured
   * @param {string} fontFamily - Font family name
   * @returns {boolean}
   */
  hasFont(fontFamily) {
    return this.fonts.has(fontFamily.toLowerCase());
  }

  /**
   * Remove a font from configuration
   * @param {string} fontFamily - Font family name
   */
  removeFont(fontFamily) {
    this.fonts.delete(fontFamily.toLowerCase());
  }

  /**
   * Get all configured fonts
   * @returns {Array<string>}
   */
  getAllFonts() {
    return Array.from(this.fonts.keys());
  }
}

module.exports = FontConfig;
