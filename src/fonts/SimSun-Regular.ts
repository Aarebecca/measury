import type { FontData } from '../types';

/**
 * SimSun
 * Font Weight: 400
 */
export default {
  fontFamily: 'SimSun',
  langs: ['chinese'],
  fontWeight: 400,
  fontStyle: 'normal',
  unitsPerEm: 256,
  metrics: {
    ascender: 220,
    descender: -36,
    lineGap: 36,
  },
  glyphsByWidth: {
    128: ' \t\n\r!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¥¦©ª«¬­®¯²³´µ¶¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿāēěīńňōŒœŠšūŸƒǎǐǒǔǖǘǚǜ‚„†‡•‹›€™',
  },
  defaultWidth: 256,
} satisfies FontData;
