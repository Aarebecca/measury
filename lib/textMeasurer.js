"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMeasurer = void 0;
const fontConfig_1 = __importDefault(require("./fontConfig"));
/**
 * TextMeasurer class for measuring text dimensions
 */
class TextMeasurer {
    constructor(fontConfig = null) {
        this.fontConfig = fontConfig || new fontConfig_1.default();
    }
    /**
     * Parse font size from style object or use default
     * @param style - Style object
     * @returns Font size in pixels
     */
    _parseFontSize(style = {}) {
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
    _parseFontFamily(style = {}) {
        return style.fontFamily || style.font_family || 'sans-serif';
    }
    /**
     * Measure text dimensions
     * @param text - Text to measure
     * @param style - Style object with fontSize, fontFamily, etc.
     * @returns Measurement result with width and height
     */
    measureText(text, style = {}) {
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
            return this._calculateDimensions(text, fontSize, fallbackMetrics);
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
    _calculateDimensions(text, fontSize, metrics) {
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
    addFont(fontFamily, metrics) {
        this.fontConfig.addFont(fontFamily, metrics);
    }
    /**
     * Get the font configuration instance
     * @returns FontConfig instance
     */
    getFontConfig() {
        return this.fontConfig;
    }
}
exports.TextMeasurer = TextMeasurer;
exports.default = TextMeasurer;
