import TextMeasurer, { TextStyle, MeasurementResult } from './textMeasurer';
import FontConfig, { FontMetrics } from './fontConfig';

// Create a default instance
const defaultMeasurer = new TextMeasurer();

/**
 * Measure text dimensions with the default measurer
 * @param text - Text to measure
 * @param style - Style object with fontSize, fontFamily, etc.
 * @returns Measurement result with width and height
 */
export function measureText(
  text: string,
  style?: TextStyle
): MeasurementResult {
  return defaultMeasurer.measureText(text, style);
}

/**
 * Create a new TextMeasurer instance with custom configuration
 * @param fontConfig - Optional custom font configuration
 * @returns TextMeasurer instance
 */
export function createMeasurer(fontConfig?: FontConfig): TextMeasurer {
  return new TextMeasurer(fontConfig);
}

/**
 * Add a font to the default configuration
 * @param fontFamily - Font family name
 * @param metrics - Font metrics
 */
export function addFont(fontFamily: string, metrics: FontMetrics): void {
  defaultMeasurer.addFont(fontFamily, metrics);
}

/**
 * Get the default font configuration
 * @returns FontConfig instance
 */
export function getFontConfig(): FontConfig {
  return defaultMeasurer.getFontConfig();
}

// Export classes and types
export { TextMeasurer, FontConfig };
export type { FontMetrics, TextStyle, MeasurementResult };
