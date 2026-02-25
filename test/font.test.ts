import { describe, expect, it, beforeAll } from 'vitest';
import { measureText, registerFont } from '../src';
import AlibabaPuHuiTiRegular from '../src/fonts/AlibabaPuHuiTi-Regular';
import SourceHanSansRegular from '../src/fonts/SourceHanSans-Regular';
import SourceHanSerifRegular from '../src/fonts/SourceHanSerif-Regular';
import LXGWWenKaiRegular from '../src/fonts/LXGWWenKai-Regular';
import _851tegakizatsuRegular from '../src/fonts/851tegakizatsu-Regular';
import ArialRegular from '../src/fonts/Arial-Regular';

const WIDTH_ABS_TOLERANCE = 0.8;
const WIDTH_REL_TOLERANCE = 0.01;
const HEIGHT_ABS_TOLERANCE = 0.6;

function expectWidthMatch(actual: number, expected: number): void {
  const allowed = Math.max(
    WIDTH_ABS_TOLERANCE,
    Math.abs(expected) * WIDTH_REL_TOLERANCE
  );
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(allowed);
}

function expectHeightMatch(actual: number, expected: number): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(HEIGHT_ABS_TOLERANCE);
}

beforeAll(() => {
  // 注册字体
  registerFont(AlibabaPuHuiTiRegular);
  registerFont(SourceHanSansRegular);
  registerFont(SourceHanSerifRegular);
  registerFont(LXGWWenKaiRegular);
  registerFont(_851tegakizatsuRegular);
  registerFont(ArialRegular);
});

describe('Alibaba PuHuiTi', () => {
  describe('[12px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 66.35);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 73.83);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 47.23);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 70.85);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 93.05);
      expectHeightMatch(metrics.height, 16.5);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 88.47);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 98.44);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 62.98);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 94.47);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 124.07);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 84.04);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Alibaba PuHuiTi',
          fontSize: 16,
        }
      );

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 343.48);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 236.16);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.73);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 92.0);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 107.3);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 189.84);
      expectHeightMatch(metrics.height, 22.5);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 166.12);
      expectHeightMatch(metrics.height, 22.5);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 132.7);
      expectHeightMatch(metrics.height, 33.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 147.65);
      expectHeightMatch(metrics.height, 33.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 94.47);
      expectHeightMatch(metrics.height, 33.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 141.7);
      expectHeightMatch(metrics.height, 33.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 186.1);
      expectHeightMatch(metrics.height, 33.5);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 265.4);
      expectHeightMatch(metrics.height, 67.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 295.3);
      expectHeightMatch(metrics.height, 67.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 188.93);
      expectHeightMatch(metrics.height, 67.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 283.4);
      expectHeightMatch(metrics.height, 67.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Alibaba PuHuiTi',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 372.2);
      expectHeightMatch(metrics.height, 67.5);
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

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 65.52);
      expectHeightMatch(metrics.height, 18.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 72.59);
      expectHeightMatch(metrics.height, 18.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 48.0);
      expectHeightMatch(metrics.height, 18.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 72.0);
      expectHeightMatch(metrics.height, 18.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 92.2);
      expectHeightMatch(metrics.height, 18.0);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 87.35);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.79);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 64.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 122.93);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 83.77);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Source Han Sans',
          fontSize: 16,
        }
      );

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 334.82);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 240.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.07);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 88.8);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 103.11);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.18);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Source Han Sans',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 164.36);
      expectHeightMatch(metrics.height, 24.0);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 131.02);
      expectHeightMatch(metrics.height, 36.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 145.18);
      expectHeightMatch(metrics.height, 36.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 36.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.0);
      expectHeightMatch(metrics.height, 36.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 184.4);
      expectHeightMatch(metrics.height, 36.0);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 262.04);
      expectHeightMatch(metrics.height, 72.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 290.36);
      expectHeightMatch(metrics.height, 72.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.0);
      expectHeightMatch(metrics.height, 72.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 288.0);
      expectHeightMatch(metrics.height, 72.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Sans',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 368.79);
      expectHeightMatch(metrics.height, 72.0);
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

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 69.82);
      expectHeightMatch(metrics.height, 17.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 77.05);
      expectHeightMatch(metrics.height, 17.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 48.0);
      expectHeightMatch(metrics.height, 17.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 72.0);
      expectHeightMatch(metrics.height, 17.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.91);
      expectHeightMatch(metrics.height, 17.5);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 93.09);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 102.73);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 64.0);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 129.22);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 87.84);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Source Han Serif',
          fontSize: 16,
        }
      );

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 351.17);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 240.0);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 151.09);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 86.24);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 106.1);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 199.72);
      expectHeightMatch(metrics.height, 23.0);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Source Han Serif',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 166.26);
      expectHeightMatch(metrics.height, 23.0);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 139.63);
      expectHeightMatch(metrics.height, 34.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 154.09);
      expectHeightMatch(metrics.height, 34.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 34.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.0);
      expectHeightMatch(metrics.height, 34.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 193.83);
      expectHeightMatch(metrics.height, 34.5);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 279.27);
      expectHeightMatch(metrics.height, 68.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 308.16);
      expectHeightMatch(metrics.height, 68.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.0);
      expectHeightMatch(metrics.height, 68.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 288.0);
      expectHeightMatch(metrics.height, 68.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Source Han Serif',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 387.65);
      expectHeightMatch(metrics.height, 68.5);
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

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 64.7);
      expectHeightMatch(metrics.height, 14.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 73.09);
      expectHeightMatch(metrics.height, 14.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 48.0);
      expectHeightMatch(metrics.height, 14.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 72.0);
      expectHeightMatch(metrics.height, 14.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 92.9);
      expectHeightMatch(metrics.height, 14.0);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 86.26);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 97.46);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 64.0);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 123.86);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 80.66);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'LXGW WenKai',
          fontSize: 16,
        }
      );

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 343.88);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 240.0);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 145.46);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 112.55);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 202.15);
      expectHeightMatch(metrics.height, 19.0);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'LXGW WenKai',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 171.45);
      expectHeightMatch(metrics.height, 19.0);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 129.39);
      expectHeightMatch(metrics.height, 28.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 146.19);
      expectHeightMatch(metrics.height, 28.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 28.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.0);
      expectHeightMatch(metrics.height, 28.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 185.79);
      expectHeightMatch(metrics.height, 28.5);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 258.77);
      expectHeightMatch(metrics.height, 57.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 292.38);
      expectHeightMatch(metrics.height, 57.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.0);
      expectHeightMatch(metrics.height, 57.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 288.0);
      expectHeightMatch(metrics.height, 57.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'LXGW WenKai',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 371.57);
      expectHeightMatch(metrics.height, 57.0);
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

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 66.0);
      expectHeightMatch(metrics.height, 12.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 78.0);
      expectHeightMatch(metrics.height, 12.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 48.0);
      expectHeightMatch(metrics.height, 12.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 72.0);
      expectHeightMatch(metrics.height, 12.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 12.0);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 88.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 104.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 64.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 128.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 80.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: '851tegakizatsu',
          fontSize: 16,
        }
      );

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 352.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 240.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 152.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 80.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 112.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 208.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: '851tegakizatsu',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 168.0);
      expectHeightMatch(metrics.height, 16.5);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 132.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 156.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.0);
      expectHeightMatch(metrics.height, 24.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.0);
      expectHeightMatch(metrics.height, 24.0);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 264.0);
      expectHeightMatch(metrics.height, 48.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 312.0);
      expectHeightMatch(metrics.height, 48.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.0);
      expectHeightMatch(metrics.height, 48.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 288.0);
      expectHeightMatch(metrics.height, 48.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: '851tegakizatsu',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 384.0);
      expectHeightMatch(metrics.height, 48.5);
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

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 62.02);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 68.69);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Arial',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 48.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Arial',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 72.0);
      expectHeightMatch(metrics.height, 16.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Arial',
        fontSize: 12,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 89.35);
      expectHeightMatch(metrics.height, 16.5);
    });
  });

  describe('[16px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 82.69);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 91.58);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 64.0);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 119.13);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"HelloWorld"', () => {
      const metrics = measureText('HelloWorld', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 78.24);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"The quick brown fox jumps over the lazy dog."', () => {
      const metrics = measureText(
        'The quick brown fox jumps over the lazy dog.',
        {
          fontFamily: 'Arial',
          fontSize: 16,
        }
      );

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 321.05);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"今天天气真不错，适合出去走走。"', () => {
      const metrics = measureText('今天天气真不错，适合出去走走。', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 240.0);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"Hello, 你好！World."', () => {
      const metrics = measureText('Hello, 你好！World.', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 139.58);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"0123456789"', () => {
      const metrics = measureText('0123456789', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 88.98);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"Price: $123.45"', () => {
      const metrics = measureText('Price: $123.45', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 103.18);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"!@#$%^&*()_+-=[]{}|;:,.<>?"', () => {
      const metrics = measureText('!@#$%^&*()_+-=[]{}|;:,.<>?', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 188.89);
      expectHeightMatch(metrics.height, 21.5);
    });

    it('"Product价格: $99.99元"', () => {
      const metrics = measureText('Product价格: $99.99元', {
        fontFamily: 'Arial',
        fontSize: 16,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 160.97);
      expectHeightMatch(metrics.height, 21.5);
    });
  });

  describe('[24px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 124.03);
      expectHeightMatch(metrics.height, 32.0);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 137.37);
      expectHeightMatch(metrics.height, 32.0);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 96.0);
      expectHeightMatch(metrics.height, 32.0);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 144.0);
      expectHeightMatch(metrics.height, 32.0);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Arial',
        fontSize: 24,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 178.7);
      expectHeightMatch(metrics.height, 32.0);
    });
  });

  describe('[48px] [400]', () => {
    it('"Hello World"', () => {
      const metrics = measureText('Hello World', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 248.06);
      expectHeightMatch(metrics.height, 64.5);
    });

    it('"Hello, World!"', () => {
      const metrics = measureText('Hello, World!', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 274.73);
      expectHeightMatch(metrics.height, 64.5);
    });

    it('"你好世界"', () => {
      const metrics = measureText('你好世界', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 192.0);
      expectHeightMatch(metrics.height, 64.5);
    });

    it('"你好，世界！"', () => {
      const metrics = measureText('你好，世界！', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 288.0);
      expectHeightMatch(metrics.height, 64.5);
    });

    it('"Hello 你好 World"', () => {
      const metrics = measureText('Hello 你好 World', {
        fontFamily: 'Arial',
        fontSize: 48,
      });

      // 浏览器 HTML 实际测量值 (from test-browser/index.html)
      expectWidthMatch(metrics.width, 357.4);
      expectHeightMatch(metrics.height, 64.5);
    });
  });
});
