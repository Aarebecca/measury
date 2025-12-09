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
export declare class FontConfig {
    private fonts;
    constructor();
    /**
     * Initialize with some default font metrics
     * These are approximate values based on common font characteristics
     */
    private _initializeDefaultFonts;
    /**
     * Add or update font metrics
     * @param fontFamily - Font family name
     * @param metrics - Font metrics object
     */
    addFont(fontFamily: string, metrics: FontMetrics): void;
    /**
     * Get font metrics for a given font family
     * @param fontFamily - Font family name
     * @returns Font metrics or null if not found
     */
    getFont(fontFamily: string): FontMetrics | null;
    /**
     * Check if a font is configured
     * @param fontFamily - Font family name
     * @returns True if font exists
     */
    hasFont(fontFamily: string): boolean;
    /**
     * Remove a font from configuration
     * @param fontFamily - Font family name
     */
    removeFont(fontFamily: string): void;
    /**
     * Get all configured fonts
     * @returns Array of font family names
     */
    getAllFonts(): string[];
}
export default FontConfig;
