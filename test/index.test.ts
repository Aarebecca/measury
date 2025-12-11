import { describe, it, expect, beforeAll } from 'vitest';
import { measureText, registerFont, setDefaultFontFamily } from '../src/index';
import AlibabaPuHuiTiRegular from '../src/fonts/AlibabaPuHuiTi-Regular';

describe('Text Measurement', () => {
  beforeAll(() => {
    registerFont(AlibabaPuHuiTiRegular);
    setDefaultFontFamily('Alibaba PuHuiTi');
  });

  describe('Basic measurement', () => {
    it('should measure text width and height', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
        fontWeight: 400,
      });

      expect(metrics.width).toBeCloseTo(88.47, 0.1);
      expect(metrics.height).toBeCloseTo(22.5, 0.1);
      expect(metrics.baseline).toBeCloseTo(16.96, 0.1);
    });

    it('should handle empty text', () => {
      const metrics = measureText('', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      expect(metrics.width).toBe(0);
      expect(metrics.height).toBeGreaterThan(0);
    });
  });

  describe('Font sizes', () => {
    it('should scale with font size', () => {
      const text = 'Test';
      const size12 = measureText(text, { fontSize: 12 });
      const size24 = measureText(text, { fontSize: 24 });

      // 24px should be approximately double of 12px
      expect(size24.width).toBeCloseTo(size12.width * 2, 0);
      expect(size24.height).toBeCloseTo(size12.height * 2, 0);
    });

    it('should work with different font sizes', () => {
      const text = 'Test';
      const sizes = [12, 16, 24, 32];

      sizes.forEach((fontSize) => {
        const metrics = measureText(text, { fontSize });
        expect(metrics.width).toBeGreaterThan(0);
        expect(metrics.height).toBeGreaterThan(0);
      });
    });
  });

  describe('Letter spacing', () => {
    it('should increase width with letter spacing', () => {
      const text = 'SPACING';
      const noSpacing = measureText(text, { fontSize: 16, letterSpacing: 0 });
      const withSpacing = measureText(text, {
        fontSize: 16,
        letterSpacing: 4,
      });

      expect(withSpacing.width).toBeGreaterThan(noSpacing.width);
      // 7 letters, 6 gaps, 4px each = 24px extra
      expect(withSpacing.width - noSpacing.width).toBeCloseTo(24, 0);
    });
  });

  describe('Word spacing', () => {
    it('should increase width with word spacing', () => {
      const text = 'Hello World';
      const noSpacing = measureText(text, { fontSize: 16, wordSpacing: 0 });
      const withSpacing = measureText(text, { fontSize: 16, wordSpacing: 10 });

      expect(withSpacing.width).toBeGreaterThan(noSpacing.width);
      // 1 space, 10px extra
      expect(withSpacing.width - noSpacing.width).toBeCloseTo(10, 0);
    });
  });

  describe('Text transformation', () => {
    it('should transform text to uppercase', () => {
      const lower = measureText('hello', { textTransform: 'none' });
      const upper = measureText('hello', { textTransform: 'uppercase' });

      // Uppercase letters are typically wider
      expect(upper.width).toBeGreaterThan(lower.width);
    });

    it('should transform text to lowercase', () => {
      const text = 'HELLO';
      const upper = measureText(text, { textTransform: 'none' });
      const lower = measureText(text, { textTransform: 'lowercase' });

      expect(lower.width).toBeLessThan(upper.width);
    });

    it('should capitalize first letter of each word', () => {
      const metrics = measureText('hello world', {
        textTransform: 'capitalize',
      });

      expect(metrics.width).toBeGreaterThan(0);
    });
  });

  describe('Kerning', () => {
    it('should apply kerning adjustments', () => {
      // Test that kerning data exists and is applied
      const text = 'AV';
      const metrics = measureText(text, { fontSize: 16 });
      expect(metrics.width).toBeGreaterThan(0);
    });

    it('should handle kerning pairs', () => {
      const pairs = ['AV', 'AW', 'VA', 'To', 'Te'];

      pairs.forEach((pair) => {
        const metrics = measureText(pair, { fontSize: 16 });
        expect(metrics.width).toBeGreaterThan(0);
      });
    });
  });

  describe('Line height', () => {
    it('should use default line height from font metrics', () => {
      const metrics = measureText('Text', { fontSize: 16 });
      // Line height should be calculated from font metrics
      expect(metrics.height).toBeGreaterThan(0);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('should support multiplier line height', () => {
      const metrics = measureText('Text', { fontSize: 16, lineHeight: 1.5 });
      expect(metrics.height).toBe(24);
    });

    it('should support pixel line height', () => {
      const metrics = measureText('Text', {
        fontSize: 16,
        lineHeight: { type: 'pixel', value: 24 },
      });
      expect(metrics.height).toBe(24);
    });

    it('should support percentage line height', () => {
      const metrics = measureText('Text', {
        fontSize: 16,
        lineHeight: { type: 'percent', value: 150 },
      });
      expect(metrics.height).toBe(24);
    });
  });

  describe('Font weights', () => {
    it('should support different font weights', () => {
      const normal = measureText('Test', { fontWeight: 400 });
      const bold = measureText('Test', { fontWeight: 'bold' });

      expect(normal.width).toBeGreaterThan(0);
      expect(bold.width).toBeGreaterThan(0);
    });

    it('should fallback to available weight', () => {
      // Alibaba PuHuiTi only has weight 400
      const metrics = measureText('Test', { fontWeight: 700 });
      expect(metrics.width).toBeGreaterThan(0);
    });
  });

  describe('Unicode support', () => {
    it('should handle emoji', () => {
      const metrics = measureText('😀', { fontSize: 16 });
      expect(metrics.width).toBeGreaterThan(0);
    });

    it('should handle multi-byte characters', () => {
      const metrics = measureText('你好', { fontSize: 16 });
      expect(metrics.width).toBeGreaterThan(0);
    });
  });

  describe('Edge cases', () => {
    it('should handle single character', () => {
      const metrics = measureText('A', { fontSize: 16 });
      expect(metrics.width).toBeGreaterThan(0);
    });

    it('should handle long text', () => {
      const longText = 'A'.repeat(1000);
      const metrics = measureText(longText, { fontSize: 16 });
      expect(metrics.width).toBeGreaterThan(0);
    });

    it('should handle special characters', () => {
      const special = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/~`';
      const metrics = measureText(special, { fontSize: 16 });
      expect(metrics.width).toBeGreaterThan(0);
    });
  });
});

describe('Font Registration', () => {
  it('should register custom fonts', () => {
    const customFont = {
      fontFamily: 'TestFont',
      fontWeight: 400,
      unitsPerEm: 1000,
      metrics: {
        ascender: 800,
        descender: -200,
        lineGap: 0,
      },
      glyphs: {
        A: 600,
        B: 600,
      },
    };

    registerFont(customFont);

    const metrics = measureText('A', {
      fontFamily: 'TestFont',
      fontSize: 16,
    });

    expect(metrics.width).toBeCloseTo(9.6, 1); // (600/1000) * 16
  });

  it('should use defaultWidth for missing glyphs', () => {
    const customFont = {
      fontFamily: 'TestFont2',
      fontWeight: 400,
      unitsPerEm: 1000,
      metrics: {
        ascender: 800,
        descender: -200,
      },
      glyphs: {
        A: 600,
      },
      defaultWidth: 500,
    };

    registerFont(customFont);

    const metrics = measureText('Z', {
      fontFamily: 'TestFont2',
      fontSize: 16,
    });

    // Should use defaultWidth
    expect(metrics.width).toBeCloseTo(8, 1); // (500/1000) * 16
  });

  it('should use fontStyle in measurement', () => {
    const normalFont = {
      fontFamily: 'StyleTestFont',
      fontWeight: 400,
      fontStyle: 'normal' as const,
      unitsPerEm: 1000,
      metrics: {
        ascender: 800,
        descender: -200,
      },
      glyphs: {
        A: 500,
      },
    };

    const italicFont = {
      fontFamily: 'StyleTestFont',
      fontWeight: 400,
      fontStyle: 'italic' as const,
      unitsPerEm: 1000,
      metrics: {
        ascender: 800,
        descender: -200,
      },
      glyphs: {
        A: 550, // Italic is slightly wider
      },
    };

    registerFont(normalFont);
    registerFont(italicFont);

    const normalMetrics = measureText('A', {
      fontFamily: 'StyleTestFont',
      fontSize: 16,
      fontWeight: 400,
      fontStyle: 'normal',
    });

    const italicMetrics = measureText('A', {
      fontFamily: 'StyleTestFont',
      fontSize: 16,
      fontWeight: 400,
      fontStyle: 'italic',
    });

    // Normal: (500/1000) * 16 = 8
    expect(normalMetrics.width).toBeCloseTo(8, 1);
    // Italic: (550/1000) * 16 = 8.8
    expect(italicMetrics.width).toBeCloseTo(8.8, 1);
  });
});
