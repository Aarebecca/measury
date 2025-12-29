import type { FontData } from '../types';

/**
 * Monaco
 * Font Weight: 400
 */
export default {
  fontFamily: 'Monaco',
  fontWeight: 400,
  fontStyle: 'normal',
  unitsPerEm: 2048,
  metrics: {
    ascender: 2048,
    descender: -512,
    lineGap: 171,
  },
  glyphs: {
    '▒': 1024,
  },
  glyphsByWidth: {
    0: '​‌‍‎‏\u2028\u2029‪‫‬‭‮⁠⁡⁢⁣⁪⁫⁬⁭⁮⁯',
    1229: ' \t\n\r!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
  },
  defaultWidth: 1229,
} satisfies FontData;
