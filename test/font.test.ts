import { describe, expect, it, beforeAll } from 'vitest';
import { measureText, registerFont } from '../src';
import AlibabaPuHuiTiRegular from '../src/fonts/AlibabaPuHuiTi-Regular';
import SourceHanSansRegular from '../src/fonts/SourceHanSans-Regular';
import SourceHanSerifRegular from '../src/fonts/SourceHanSerif-Regular';

beforeAll(() => {
  // 注册字体
  registerFont(AlibabaPuHuiTiRegular);
  registerFont(SourceHanSansRegular);
  registerFont(SourceHanSerifRegular);
});

describe('Alibaba PuHuiTi', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(66.35, 0);
      expect(metrics.height).toBeCloseTo(16.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(73.83, 0);
      expect(metrics.height).toBeCloseTo(16.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(47.23, 0);
      expect(metrics.height).toBeCloseTo(16.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(70.85, 0);
      expect(metrics.height).toBeCloseTo(16.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.05, 0);
      expect(metrics.height).toBeCloseTo(16.5, 0);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.47, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(98.44, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(62.98, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(94.47, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(124.07, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(84.04, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
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
      expect(metrics.width).toBeCloseTo(343.48, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(236.16, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.73, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(92.0, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(107.3, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(189.84, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(166.12, 0);
      expect(metrics.height).toBeCloseTo(22.5, 0);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(132.7, 0);
      expect(metrics.height).toBeCloseTo(33.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(147.65, 0);
      expect(metrics.height).toBeCloseTo(33.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(94.47, 0);
      expect(metrics.height).toBeCloseTo(33.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(141.7, 0);
      expect(metrics.height).toBeCloseTo(33.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(186.1, 0);
      expect(metrics.height).toBeCloseTo(33.5, 0);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(265.4, 0);
      expect(metrics.height).toBeCloseTo(67.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(295.3, 0);
      expect(metrics.height).toBeCloseTo(67.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(188.93, 0);
      expect(metrics.height).toBeCloseTo(67.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(283.4, 0);
      expect(metrics.height).toBeCloseTo(67.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(372.2, 0);
      expect(metrics.height).toBeCloseTo(67.5, 0);
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
      expect(metrics.width).toBeCloseTo(65.52, 0);
      expect(metrics.height).toBeCloseTo(18.0, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.59, 0);
      expect(metrics.height).toBeCloseTo(18.0, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 0);
      expect(metrics.height).toBeCloseTo(18.0, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 0);
      expect(metrics.height).toBeCloseTo(18.0, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(92.2, 0);
      expect(metrics.height).toBeCloseTo(18.0, 0);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(87.35, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.79, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(122.93, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(83.77, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
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
      expect(metrics.width).toBeCloseTo(334.82, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.07, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(88.8, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(103.11, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.18, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(164.36, 0);
      expect(metrics.height).toBeCloseTo(24.0, 0);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(131.02, 0);
      expect(metrics.height).toBeCloseTo(36.0, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(145.18, 0);
      expect(metrics.height).toBeCloseTo(36.0, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 0);
      expect(metrics.height).toBeCloseTo(36.0, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 0);
      expect(metrics.height).toBeCloseTo(36.0, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(184.4, 0);
      expect(metrics.height).toBeCloseTo(36.0, 0);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(262.04, 0);
      expect(metrics.height).toBeCloseTo(72.0, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(290.36, 0);
      expect(metrics.height).toBeCloseTo(72.0, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 0);
      expect(metrics.height).toBeCloseTo(72.0, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 0);
      expect(metrics.height).toBeCloseTo(72.0, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(368.79, 0);
      expect(metrics.height).toBeCloseTo(72.0, 0);
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
      expect(metrics.width).toBeCloseTo(69.82, 0);
      expect(metrics.height).toBeCloseTo(17.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(77.05, 0);
      expect(metrics.height).toBeCloseTo(17.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(48.0, 0);
      expect(metrics.height).toBeCloseTo(17.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(72.0, 0);
      expect(metrics.height).toBeCloseTo(17.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.91, 0);
      expect(metrics.height).toBeCloseTo(17.5, 0);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(93.09, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(102.73, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(64.0, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(129.22, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(87.84, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
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
      expect(metrics.width).toBeCloseTo(351.17, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(240.0, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(151.09, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(86.24, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(106.1, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(199.72, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(166.26, 0);
      expect(metrics.height).toBeCloseTo(23.0, 0);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(139.63, 0);
      expect(metrics.height).toBeCloseTo(34.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(154.09, 0);
      expect(metrics.height).toBeCloseTo(34.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(96.0, 0);
      expect(metrics.height).toBeCloseTo(34.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(144.0, 0);
      expect(metrics.height).toBeCloseTo(34.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(193.83, 0);
      expect(metrics.height).toBeCloseTo(34.5, 0);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(279.27, 0);
      expect(metrics.height).toBeCloseTo(68.5, 0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(308.16, 0);
      expect(metrics.height).toBeCloseTo(68.5, 0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(192.0, 0);
      expect(metrics.height).toBeCloseTo(68.5, 0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(288.0, 0);
      expect(metrics.height).toBeCloseTo(68.5, 0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器实际测量值 (from test-browser/index.html)
      expect(metrics.width).toBeCloseTo(387.65, 0);
      expect(metrics.height).toBeCloseTo(68.5, 0);
    });
  });
});
