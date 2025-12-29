import { describe, it, expect } from 'vitest';
import { registerFont, getFontData, setDefaultFontFamily } from '../src/font';

describe('Font Management', () => {
  describe('registerFont', () => {
    it('should register a font with numeric weight', () => {
      const font = {
        fontFamily: 'TestFont',
        fontWeight: 400,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);
      const retrieved = getFontData('TestFont', 400);

      expect(retrieved.fontFamily).toBe('TestFont');
      expect(retrieved.glyphs?.A).toBe(500);
    });

    it('should register a font with named weight', () => {
      const font = {
        fontFamily: 'TestFont',
        fontWeight: 'bold',
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 600 },
      };

      registerFont(font);
      const retrieved = getFontData('TestFont', 'bold');

      expect(retrieved.fontFamily).toBe('TestFont');
      expect(retrieved.glyphs?.A).toBe(600);
    });

    it('should support multiple weights for same family', () => {
      const regular = {
        fontFamily: 'MultiWeight',
        fontWeight: 400,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      const bold = {
        fontFamily: 'MultiWeight',
        fontWeight: 700,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 600 },
      };

      registerFont(regular);
      registerFont(bold);

      expect(getFontData('MultiWeight', 400).glyphs?.A).toBe(500);
      expect(getFontData('MultiWeight', 700).glyphs?.A).toBe(600);
    });
  });

  describe('getFontData', () => {
    it('should retrieve font by family and weight', () => {
      const font = {
        fontFamily: 'GetTest',
        fontWeight: 400,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);
      const retrieved = getFontData('GetTest', 400);

      expect(retrieved).toBeDefined();
      expect(retrieved.fontFamily).toBe('GetTest');
    });

    it('should fallback to 400 when requested weight not found', () => {
      const font = {
        fontFamily: 'FallbackTest',
        fontWeight: 400,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);
      const retrieved = getFontData('FallbackTest', 700);

      expect(retrieved.fontFamily).toBe('FallbackTest');
      expect(retrieved.glyphs?.A).toBe(500);
    });

    it('should use fallback font data for unregistered font', () => {
      const fontData = getFontData('NonExistent', 400);

      // 应该返回降级字体数据，而不是抛出错误
      expect(fontData).toBeDefined();
      expect(fontData.fontFamily).toBe('sans-serif');
      expect(fontData.fontWeight).toBe(400);
      expect(fontData.glyphs).toBeDefined();
    });

    it('should resolve font family aliases', () => {
      const font = {
        fontFamily: 'Alias Family',
        aliases: ['AliasFamily', 'AliasFamily-Regular'],
        fontWeight: 400,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 520 },
      };

      registerFont(font);

      const noSpace = getFontData('AliasFamily', 400);
      const withSuffix = getFontData('AliasFamily-Regular', 400);

      expect(noSpace.fontFamily).toBe('Alias Family');
      expect(withSuffix.fontFamily).toBe('Alias Family');
    });

    it('should normalize weight names', () => {
      const font = {
        fontFamily: 'NormalizeTest',
        fontWeight: 'bold',
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);

      // 'bold' should normalize to '700'
      const byName = getFontData('NormalizeTest', 'bold');
      const byNumber = getFontData('NormalizeTest', 700);

      expect(byName.fontFamily).toBe(byNumber.fontFamily);
    });

    it('should support all named weights', () => {
      const weights: Array<[string, number]> = [
        ['thin', 100],
        ['extra-light', 200],
        ['light', 300],
        ['normal', 400],
        ['medium', 500],
        ['semi-bold', 600],
        ['bold', 700],
        ['extra-bold', 800],
        ['black', 900],
        ['extra-black', 950],
      ];

      weights.forEach(([name, number]) => {
        const font = {
          fontFamily: `Weight${number}`,
          fontWeight: name,
          unitsPerEm: 1000,
          metrics: { ascender: 800, descender: -200 },
          glyphs: { A: number },
        };

        registerFont(font);
        const retrieved = getFontData(`Weight${number}`, number);
        expect(retrieved.glyphs?.A).toBe(number);
      });
    });
  });

  describe('setDefaultFontFamily', () => {
    it('should set default font family', () => {
      const font = {
        fontFamily: 'DefaultTest',
        fontWeight: 400,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);
      setDefaultFontFamily('DefaultTest');

      // Should be able to get font without specifying family
      const retrieved = getFontData();
      expect(retrieved.fontFamily).toBe('DefaultTest');
    });
  });

  describe('fontStyle support', () => {
    it('should register and retrieve font with normal style', () => {
      const font = {
        fontFamily: 'StyleTest',
        fontWeight: 400,
        fontStyle: 'normal' as const,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);
      const retrieved = getFontData('StyleTest', 400, 'normal');

      expect(retrieved.fontFamily).toBe('StyleTest');
      expect(retrieved.fontStyle).toBe('normal');
      expect(retrieved.glyphs?.A).toBe(500);
    });

    it('should register and retrieve font with italic style', () => {
      const font = {
        fontFamily: 'StyleTest',
        fontWeight: 400,
        fontStyle: 'italic' as const,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 550 },
      };

      registerFont(font);
      const retrieved = getFontData('StyleTest', 400, 'italic');

      expect(retrieved.fontFamily).toBe('StyleTest');
      expect(retrieved.fontStyle).toBe('italic');
      expect(retrieved.glyphs?.A).toBe(550);
    });

    it('should fallback to normal style if requested style not found', () => {
      const font = {
        fontFamily: 'StyleFallback',
        fontWeight: 400,
        fontStyle: 'normal' as const,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      registerFont(font);
      // Request italic but only normal is registered
      const retrieved = getFontData('StyleFallback', 400, 'italic');

      expect(retrieved.fontFamily).toBe('StyleFallback');
      expect(retrieved.fontStyle).toBe('normal');
      expect(retrieved.glyphs?.A).toBe(500);
    });

    it('should support multiple styles for same family and weight', () => {
      const normal = {
        fontFamily: 'MultiStyle',
        fontWeight: 400,
        fontStyle: 'normal' as const,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 500 },
      };

      const italic = {
        fontFamily: 'MultiStyle',
        fontWeight: 400,
        fontStyle: 'italic' as const,
        unitsPerEm: 1000,
        metrics: { ascender: 800, descender: -200 },
        glyphs: { A: 550 },
      };

      registerFont(normal);
      registerFont(italic);

      const retrievedNormal = getFontData('MultiStyle', 400, 'normal');
      const retrievedItalic = getFontData('MultiStyle', 400, 'italic');

      expect(retrievedNormal.glyphs?.A).toBe(500);
      expect(retrievedItalic.glyphs?.A).toBe(550);
    });
  });
});
