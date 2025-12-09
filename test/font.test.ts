import { describe, expect, it, beforeAll } from 'vitest';
import { measureText, registerFont } from '../src';
import AlibabaPuHuiTiRegular from '../src/fonts/AlibabaPuHuiTi-Regular';
import SourceHanSansRegular from '../src/fonts/SourceHanSans-Regular';
import SourceHanSerifRegular from '../src/fonts/SourceHanSerif-Regular';
import LXGWWenKaiRegular from '../src/fonts/LXGWWenKai-Regular';
import _851tegakizatsuRegular from '../src/fonts/851tegakizatsu-Regular';

beforeAll(() => {
  // 注册字体
  registerFont(AlibabaPuHuiTiRegular);
  registerFont(SourceHanSansRegular);
  registerFont(SourceHanSerifRegular);
  registerFont(LXGWWenKaiRegular);
  registerFont(_851tegakizatsuRegular);
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
