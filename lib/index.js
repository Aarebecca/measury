"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontConfig = exports.TextMeasurer = void 0;
exports.measureText = measureText;
exports.createMeasurer = createMeasurer;
exports.addFont = addFont;
exports.getFontConfig = getFontConfig;
const textMeasurer_1 = __importDefault(require("./textMeasurer"));
exports.TextMeasurer = textMeasurer_1.default;
const fontConfig_1 = __importDefault(require("./fontConfig"));
exports.FontConfig = fontConfig_1.default;
// Create a default instance
const defaultMeasurer = new textMeasurer_1.default();
/**
 * Measure text dimensions with the default measurer
 * @param text - Text to measure
 * @param style - Style object with fontSize, fontFamily, etc.
 * @returns Measurement result with width and height
 */
function measureText(text, style) {
    return defaultMeasurer.measureText(text, style);
}
/**
 * Create a new TextMeasurer instance with custom configuration
 * @param fontConfig - Optional custom font configuration
 * @returns TextMeasurer instance
 */
function createMeasurer(fontConfig) {
    return new textMeasurer_1.default(fontConfig);
}
/**
 * Add a font to the default configuration
 * @param fontFamily - Font family name
 * @param metrics - Font metrics
 */
function addFont(fontFamily, metrics) {
    defaultMeasurer.addFont(fontFamily, metrics);
}
/**
 * Get the default font configuration
 * @returns FontConfig instance
 */
function getFontConfig() {
    return defaultMeasurer.getFontConfig();
}
