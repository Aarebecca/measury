import type { Metrics, TextStyle } from './types';

export function measureText(text: string, style?: TextStyle): Metrics {
  return {
    // TODO: Implement text measurement logic
    width: 0,
    height: 0,
    lines: 1,
    lineHeight: 0,
  };
}
