import type { TextMetrics, TextStyle } from './types';

export function measureText(text: string, style?: TextStyle): TextMetrics {
  return {
    // TODO: Implement text measurement logic
    width: 0,
    height: 0,
    baseline: 0,
  };
}
