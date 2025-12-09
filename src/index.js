const TextMeasurer = require('./textMeasurer');
const FontConfig = require('./fontConfig');

// Create a default instance
const defaultMeasurer = new TextMeasurer();

/**
 * Measure text dimensions with the default measurer
 * @param {string} text - Text to measure
 * @param {Object} style - Style object with fontSize, fontFamily, etc.
 * @returns {Object} Measurement result with width and height
 */
function measureText(text, style) {
  return defaultMeasurer.measureText(text, style);
}

/**
 * Create a new TextMeasurer instance with custom configuration
 * @param {FontConfig} fontConfig - Optional custom font configuration
 * @returns {TextMeasurer}
 */
function createMeasurer(fontConfig) {
  return new TextMeasurer(fontConfig);
}

/**
 * Add a font to the default configuration
 * @param {string} fontFamily - Font family name
 * @param {Object} metrics - Font metrics
 */
function addFont(fontFamily, metrics) {
  defaultMeasurer.addFont(fontFamily, metrics);
}

/**
 * Get the default font configuration
 * @returns {FontConfig}
 */
function getFontConfig() {
  return defaultMeasurer.getFontConfig();
}

module.exports = {
  measureText,
  createMeasurer,
  addFont,
  getFontConfig,
  TextMeasurer,
  FontConfig,
};
