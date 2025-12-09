import TextMeasurer, { TextStyle, MeasurementResult } from './textMeasurer';
import FontConfig, { FontMetrics } from './fontConfig';
/**
 * Measure text dimensions with the default measurer
 * @param text - Text to measure
 * @param style - Style object with fontSize, fontFamily, etc.
 * @returns Measurement result with width and height
 */
export declare function measureText(text: string, style?: TextStyle): MeasurementResult;
/**
 * Create a new TextMeasurer instance with custom configuration
 * @param fontConfig - Optional custom font configuration
 * @returns TextMeasurer instance
 */
export declare function createMeasurer(fontConfig?: FontConfig): TextMeasurer;
/**
 * Add a font to the default configuration
 * @param fontFamily - Font family name
 * @param metrics - Font metrics
 */
export declare function addFont(fontFamily: string, metrics: FontMetrics): void;
/**
 * Get the default font configuration
 * @returns FontConfig instance
 */
export declare function getFontConfig(): FontConfig;
export { TextMeasurer, FontConfig };
export type { FontMetrics, TextStyle, MeasurementResult };
