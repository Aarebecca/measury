import { describe, expect, it, beforeAll } from 'vitest';
import { measureText, registerFont } from '../src';
import AlibabaPuHuiTiRegular from '../src/fonts/AlibabaPuHuiTi-Regular';
import SourceHanSansRegular from '../src/fonts/SourceHanSans-Regular';
import SourceHanSerifRegular from '../src/fonts/SourceHanSerif-Regular';
import LXGWWenKaiRegular from '../src/fonts/LXGWWenKai-Regular';
import _851tegakizatsuRegular from '../src/fonts/851tegakizatsu-Regular';
import ArialRegular from '../src/fonts/Arial-Regular';
import ComicSansMSRegular from '../src/fonts/ComicSansMS-Regular';
import GeorgiaRegular from '../src/fonts/Georgia-Regular';
import HelveticaNeueRegular from '../src/fonts/HelveticaNeue-Regular';
import MenloRegular from '../src/fonts/Menlo-Regular';
import MicrosoftYaHeiRegular from '../src/fonts/MicrosoftYaHei-Regular';
import MonacoRegular from '../src/fonts/Monaco-Regular';
import PingFangSCRegular from '../src/fonts/PingFangSC-Regular';
import RobotoRegular from '../src/fonts/Roboto-Regular';
import SFProRegular from '../src/fonts/SFPro-Regular';
import SegoeUIRegular from '../src/fonts/SegoeUI-Regular';
import SimHeiRegular from '../src/fonts/SimHei-Regular';
import SimSunRegular from '../src/fonts/SimSun-Regular';
import TimesNewRomanRegular from '../src/fonts/TimesNewRoman-Regular';
import TimesRegular from '../src/fonts/Times-Regular';

beforeAll(() => {
  // 注册字体
  registerFont(AlibabaPuHuiTiRegular);
  registerFont(SourceHanSansRegular);
  registerFont(SourceHanSerifRegular);
  registerFont(LXGWWenKaiRegular);
  registerFont(_851tegakizatsuRegular);
  registerFont(ArialRegular);
  registerFont(ComicSansMSRegular);
  registerFont(GeorgiaRegular);
  registerFont(HelveticaNeueRegular);
  registerFont(MenloRegular);
  registerFont(MicrosoftYaHeiRegular);
  registerFont(MonacoRegular);
  registerFont(PingFangSCRegular);
  registerFont(RobotoRegular);
  registerFont(SFProRegular);
  registerFont(SegoeUIRegular);
  registerFont(SimHeiRegular);
  registerFont(SimSunRegular);
  registerFont(TimesNewRomanRegular);
  registerFont(TimesRegular);
});

describe('Alibaba PuHuiTi', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(66.35, 1);
      expect(metrics.height).toBeCloseTo(16.8, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(73.83, 1);
      expect(metrics.height).toBeCloseTo(16.8, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(47.23, 1);
      expect(metrics.height).toBeCloseTo(16.8, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(70.85, 1);
      expect(metrics.height).toBeCloseTo(16.8, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.05, 1);
      expect(metrics.height).toBeCloseTo(16.8, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.47, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(98.44, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(62.98, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(94.47, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(124.07, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(84.04, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Alibaba PuHuiTi',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(343.48, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(236.16, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.73, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(92.0, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(107.3, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(189.84, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(166.12, 1);
      expect(metrics.height).toBeCloseTo(22.4, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(132.7, 1);
      expect(metrics.height).toBeCloseTo(33.6, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(147.65, 1);
      expect(metrics.height).toBeCloseTo(33.6, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(94.47, 1);
      expect(metrics.height).toBeCloseTo(33.6, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(141.7, 1);
      expect(metrics.height).toBeCloseTo(33.6, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(186.1, 1);
      expect(metrics.height).toBeCloseTo(33.6, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(265.4, 1);
      expect(metrics.height).toBeCloseTo(67.2, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(295.3, 1);
      expect(metrics.height).toBeCloseTo(67.2, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(188.93, 1);
      expect(metrics.height).toBeCloseTo(67.2, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(283.4, 1);
      expect(metrics.height).toBeCloseTo(67.2, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(372.2, 1);
      expect(metrics.height).toBeCloseTo(67.2, 1);
    });
  });
});

describe('Source Han Sans', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(65.52, 1);
      expect(metrics.height).toBeCloseTo(18.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.59, 1);
      expect(metrics.height).toBeCloseTo(18.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(18.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(18.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(92.2, 1);
      expect(metrics.height).toBeCloseTo(18.0, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(87.35, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.79, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(122.93, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(83.77, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Source Han Sans',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(334.82, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.07, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.8, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(103.11, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.18, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(164.36, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(131.02, 1);
      expect(metrics.height).toBeCloseTo(36.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(145.18, 1);
      expect(metrics.height).toBeCloseTo(36.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(36.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(36.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(184.4, 1);
      expect(metrics.height).toBeCloseTo(36.0, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(262.04, 1);
      expect(metrics.height).toBeCloseTo(72.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(290.36, 1);
      expect(metrics.height).toBeCloseTo(72.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(72.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(72.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(368.79, 1);
      expect(metrics.height).toBeCloseTo(72.0, 1);
    });
  });
});

describe('Source Han Serif', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(69.82, 1);
      expect(metrics.height).toBeCloseTo(17.24, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(77.05, 1);
      expect(metrics.height).toBeCloseTo(17.24, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(17.24, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(17.24, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.91, 1);
      expect(metrics.height).toBeCloseTo(17.24, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.09, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(102.73, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(129.22, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(87.84, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Source Han Serif',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(351.17, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(151.09, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(86.24, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(106.1, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(199.72, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(166.26, 1);
      expect(metrics.height).toBeCloseTo(22.99, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(139.63, 1);
      expect(metrics.height).toBeCloseTo(34.49, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(154.09, 1);
      expect(metrics.height).toBeCloseTo(34.49, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(34.49, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(34.49, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(193.83, 1);
      expect(metrics.height).toBeCloseTo(34.49, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(279.27, 1);
      expect(metrics.height).toBeCloseTo(68.98, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(308.16, 1);
      expect(metrics.height).toBeCloseTo(68.98, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(68.98, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(68.98, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(387.65, 1);
      expect(metrics.height).toBeCloseTo(68.98, 1);
    });
  });
});

describe('LXGW WenKai', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.7, 1);
      expect(metrics.height).toBeCloseTo(14.21, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(73.09, 1);
      expect(metrics.height).toBeCloseTo(14.21, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(14.21, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(14.21, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(92.9, 1);
      expect(metrics.height).toBeCloseTo(14.21, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(86.26, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(97.46, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(123.86, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.66, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'LXGW WenKai',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(343.88, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(145.46, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(112.55, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(202.15, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(171.45, 1);
      expect(metrics.height).toBeCloseTo(18.94, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(129.39, 1);
      expect(metrics.height).toBeCloseTo(28.42, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(146.19, 1);
      expect(metrics.height).toBeCloseTo(28.42, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(28.42, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(28.42, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(185.79, 1);
      expect(metrics.height).toBeCloseTo(28.42, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(258.77, 1);
      expect(metrics.height).toBeCloseTo(56.83, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(292.38, 1);
      expect(metrics.height).toBeCloseTo(56.83, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(56.83, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(56.83, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(371.57, 1);
      expect(metrics.height).toBeCloseTo(56.83, 1);
    });
  });
});

describe('851tegakizatsu', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(66.0, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(78.0, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(104.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(128.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: '851tegakizatsu',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(352.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(152.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(112.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(208.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(168.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(132.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(156.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(264.0, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(312.0, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(384.0, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });
  });
});

describe('Arial', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(62.02, 1);
      expect(metrics.height).toBeCloseTo(16.08, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(68.69, 1);
      expect(metrics.height).toBeCloseTo(16.08, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(82.69, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(91.58, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(78.24, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Arial',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(321.05, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.98, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(103.18, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(188.89, 1);
      expect(metrics.height).toBeCloseTo(21.44, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(124.03, 1);
      expect(metrics.height).toBeCloseTo(32.16, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(137.37, 1);
      expect(metrics.height).toBeCloseTo(32.16, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(248.06, 1);
      expect(metrics.height).toBeCloseTo(64.31, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(274.73, 1);
      expect(metrics.height).toBeCloseTo(64.31, 1);
    });
  });
});

describe('Comic Sans MS', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Comic Sans MS',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(67.15, 1);
      expect(metrics.height).toBeCloseTo(16.72, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Comic Sans MS',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(73.33, 1);
      expect(metrics.height).toBeCloseTo(16.72, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(89.53, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(97.77, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(84.75, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Comic Sans MS',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(337.56, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(95.09, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(108.39, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Comic Sans MS',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(197.98, 1);
      expect(metrics.height).toBeCloseTo(22.3, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Comic Sans MS',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(134.3, 1);
      expect(metrics.height).toBeCloseTo(33.45, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Comic Sans MS',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(146.65, 1);
      expect(metrics.height).toBeCloseTo(33.45, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Comic Sans MS',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(268.59, 1);
      expect(metrics.height).toBeCloseTo(66.89, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Comic Sans MS',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(293.3, 1);
      expect(metrics.height).toBeCloseTo(66.89, 1);
    });
  });
});

describe('Georgia', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Georgia',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(65.23, 1);
      expect(metrics.height).toBeCloseTo(13.63, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Georgia',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.44, 1);
      expect(metrics.height).toBeCloseTo(13.63, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Georgia',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(86.97, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Georgia',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.58, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Georgia',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(83.11, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Georgia',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(319.14, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Georgia',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(87.64, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Georgia',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(101.06, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Georgia',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(209.97, 1);
      expect(metrics.height).toBeCloseTo(18.18, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Georgia',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(130.45, 1);
      expect(metrics.height).toBeCloseTo(27.27, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Georgia',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.87, 1);
      expect(metrics.height).toBeCloseTo(27.27, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Georgia',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(260.91, 1);
      expect(metrics.height).toBeCloseTo(54.54, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Georgia',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(289.73, 1);
      expect(metrics.height).toBeCloseTo(54.54, 1);
    });
  });
});

describe('Helvetica Neue', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Helvetica Neue',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(61.76, 1);
      expect(metrics.height).toBeCloseTo(14.5, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Helvetica Neue',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(68.2, 1);
      expect(metrics.height).toBeCloseTo(14.5, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(82.34, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(90.93, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(77.89, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Helvetica Neue',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(325.38, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.96, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(103.16, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Helvetica Neue',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(186.15, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Helvetica Neue',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(123.51, 1);
      expect(metrics.height).toBeCloseTo(28.5, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Helvetica Neue',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(136.4, 1);
      expect(metrics.height).toBeCloseTo(28.5, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Helvetica Neue',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(247.02, 1);
      expect(metrics.height).toBeCloseTo(57.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Helvetica Neue',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(272.79, 1);
      expect(metrics.height).toBeCloseTo(57.0, 1);
    });
  });
});

describe('Menlo', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Menlo',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(79.48, 1);
      expect(metrics.height).toBeCloseTo(14.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Menlo',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.92, 1);
      expect(metrics.height).toBeCloseTo(14.0, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Menlo',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(105.96, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Menlo',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(125.23, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Menlo',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.33, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Menlo',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(423.84, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Menlo',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.33, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Menlo',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(134.86, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Menlo',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(250.45, 1);
      expect(metrics.height).toBeCloseTo(19.0, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Menlo',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(158.95, 1);
      expect(metrics.height).toBeCloseTo(28.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Menlo',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(187.84, 1);
      expect(metrics.height).toBeCloseTo(28.0, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Menlo',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(317.88, 1);
      expect(metrics.height).toBeCloseTo(56.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Menlo',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(375.68, 1);
      expect(metrics.height).toBeCloseTo(56.0, 1);
    });
  });
});

describe('Microsoft YaHei', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(68.64, 1);
      expect(metrics.height).toBeCloseTo(15.84, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(75.28, 1);
      expect(metrics.height).toBeCloseTo(15.84, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(15.84, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(15.84, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.19, 1);
      expect(metrics.height).toBeCloseTo(15.84, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(91.52, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(100.37, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(128.25, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(86.78, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Microsoft YaHei',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(348.67, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(147.22, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.83, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(105.99, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(209.46, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(167.27, 1);
      expect(metrics.height).toBeCloseTo(21.12, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(137.27, 1);
      expect(metrics.height).toBeCloseTo(31.68, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(150.55, 1);
      expect(metrics.height).toBeCloseTo(31.68, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(31.68, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(31.68, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.38, 1);
      expect(metrics.height).toBeCloseTo(31.68, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(274.55, 1);
      expect(metrics.height).toBeCloseTo(63.35, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(301.1, 1);
      expect(metrics.height).toBeCloseTo(63.35, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(63.35, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(63.35, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Microsoft YaHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(384.75, 1);
      expect(metrics.height).toBeCloseTo(63.35, 1);
    });
  });
});

describe('Monaco', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Monaco',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(79.22, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Monaco',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.62, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Monaco',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(105.62, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Monaco',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(124.82, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Monaco',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.02, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Monaco',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(422.47, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Monaco',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.02, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Monaco',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(134.42, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Monaco',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(249.64, 1);
      expect(metrics.height).toBeCloseTo(21.34, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Monaco',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(158.43, 1);
      expect(metrics.height).toBeCloseTo(32.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Monaco',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(187.23, 1);
      expect(metrics.height).toBeCloseTo(32.0, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Monaco',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(316.85, 1);
      expect(metrics.height).toBeCloseTo(64.01, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Monaco',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(374.46, 1);
      expect(metrics.height).toBeCloseTo(64.01, 1);
    });
  });
});

describe('PingFang SC', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'PingFang SC',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(63.28, 1);
      expect(metrics.height).toBeCloseTo(16.5, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'PingFang SC',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(70.38, 1);
      expect(metrics.height).toBeCloseTo(16.5, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'PingFang SC',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(16.5, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'PingFang SC',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(16.5, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'PingFang SC',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(91.27, 1);
      expect(metrics.height).toBeCloseTo(16.5, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(84.38, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.83, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(121.7, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(79.05, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'PingFang SC',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(334.13, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(140.63, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(108.41, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(197.09, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'PingFang SC',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(166.93, 1);
      expect(metrics.height).toBeCloseTo(22.5, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'PingFang SC',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(126.55, 1);
      expect(metrics.height).toBeCloseTo(33.5, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'PingFang SC',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(140.74, 1);
      expect(metrics.height).toBeCloseTo(33.5, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'PingFang SC',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(33.5, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'PingFang SC',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(33.5, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'PingFang SC',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(182.55, 1);
      expect(metrics.height).toBeCloseTo(33.5, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'PingFang SC',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(253.11, 1);
      expect(metrics.height).toBeCloseTo(67.5, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'PingFang SC',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(281.48, 1);
      expect(metrics.height).toBeCloseTo(67.5, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'PingFang SC',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(67.5, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'PingFang SC',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(67.5, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'PingFang SC',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(365.09, 1);
      expect(metrics.height).toBeCloseTo(67.5, 1);
    });
  });
});

describe('Roboto', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Roboto',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(61.64, 1);
      expect(metrics.height).toBeCloseTo(14.06, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Roboto',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(67.1, 1);
      expect(metrics.height).toBeCloseTo(14.06, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Roboto',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(82.19, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Roboto',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(89.46, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Roboto',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(78.22, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Roboto',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(320.05, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Roboto',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(89.92, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Roboto',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(102.28, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Roboto',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(175.04, 1);
      expect(metrics.height).toBeCloseTo(18.75, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Roboto',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(123.28, 1);
      expect(metrics.height).toBeCloseTo(28.13, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Roboto',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(134.2, 1);
      expect(metrics.height).toBeCloseTo(28.13, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Roboto',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(246.56, 1);
      expect(metrics.height).toBeCloseTo(56.25, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Roboto',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(268.38, 1);
      expect(metrics.height).toBeCloseTo(56.25, 1);
    });
  });
});

describe('SF Pro', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SF Pro',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(65.39, 1);
      expect(metrics.height).toBeCloseTo(14.32, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SF Pro',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.57, 1);
      expect(metrics.height).toBeCloseTo(14.32, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SF Pro',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(87.19, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SF Pro',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.76, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'SF Pro',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(81.91, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'SF Pro',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(341.23, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'SF Pro',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.84, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'SF Pro',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(108.66, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'SF Pro',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(208.28, 1);
      expect(metrics.height).toBeCloseTo(19.09, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SF Pro',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(118.48, 1);
      expect(metrics.height).toBeCloseTo(28.64, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SF Pro',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(129.01, 1);
      expect(metrics.height).toBeCloseTo(28.64, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SF Pro',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(231.47, 1);
      expect(metrics.height).toBeCloseTo(57.28, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SF Pro',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(250.83, 1);
      expect(metrics.height).toBeCloseTo(57.28, 1);
    });
  });
});

describe('Segoe UI', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Segoe UI',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(63.02, 1);
      expect(metrics.height).toBeCloseTo(15.96, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Segoe UI',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(69.04, 1);
      expect(metrics.height).toBeCloseTo(15.96, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Segoe UI',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(84.03, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Segoe UI',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(92.05, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Segoe UI',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(79.65, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Segoe UI',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(320.15, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Segoe UI',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(86.25, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Segoe UI',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(97.23, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Segoe UI',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.09, 1);
      expect(metrics.height).toBeCloseTo(21.28, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Segoe UI',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(126.05, 1);
      expect(metrics.height).toBeCloseTo(31.92, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Segoe UI',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(138.07, 1);
      expect(metrics.height).toBeCloseTo(31.92, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Segoe UI',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(252.09, 1);
      expect(metrics.height).toBeCloseTo(63.84, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Segoe UI',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(276.14, 1);
      expect(metrics.height).toBeCloseTo(63.84, 1);
    });
  });
});

describe('SimHei', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(66.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(78.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimHei',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(104.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(128.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'SimHei',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(352.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(152.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(112.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(208.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'SimHei',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(168.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(132.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(156.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimHei',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(264.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(312.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimHei',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(384.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });
  });
});

describe('SimSun', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimSun',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(66.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimSun',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(78.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimSun',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimSun',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimSun',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(13.69, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(104.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(128.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'SimSun',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(352.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(152.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(112.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(208.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'SimSun',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(168.0, 1);
      expect(metrics.height).toBeCloseTo(18.25, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimSun',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(132.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimSun',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(156.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimSun',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimSun',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimSun',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(27.38, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'SimSun',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(264.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'SimSun',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(312.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'SimSun',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'SimSun',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'SimSun',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(384.0, 1);
      expect(metrics.height).toBeCloseTo(54.75, 1);
    });
  });
});

describe('Times New Roman', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times New Roman',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(59.14, 1);
      expect(metrics.height).toBeCloseTo(13.8, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times New Roman',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(66.14, 1);
      expect(metrics.height).toBeCloseTo(13.8, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times New Roman',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(78.85, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times New Roman',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.18, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Times New Roman',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(75.14, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Times New Roman',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(296.38, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Times New Roman',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Times New Roman',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.32, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Times New Roman',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(190.63, 1);
      expect(metrics.height).toBeCloseTo(18.4, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times New Roman',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(118.28, 1);
      expect(metrics.height).toBeCloseTo(27.6, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times New Roman',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(132.27, 1);
      expect(metrics.height).toBeCloseTo(27.6, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times New Roman',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(236.55, 1);
      expect(metrics.height).toBeCloseTo(55.2, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times New Roman',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(264.54, 1);
      expect(metrics.height).toBeCloseTo(55.2, 1);
    });
  });
});

describe('Times', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(60.32, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(67.31, 1);
      expect(metrics.height).toBeCloseTo(12.0, 1);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.42, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(89.75, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Times',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(76.42, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Times',
          fontSize: 16,
        }
      );

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(296.38, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Times',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(80.0, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Times',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.32, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Times',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(190.63, 1);
      expect(metrics.height).toBeCloseTo(16.0, 1);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(120.63, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(134.63, 1);
      expect(metrics.height).toBeCloseTo(24.0, 1);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Times',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(241.27, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Times',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(269.25, 1);
      expect(metrics.height).toBeCloseTo(48.0, 1);
    });
  });
});
