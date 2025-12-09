import type { FontData } from './types';

export function registerFont(data: FontData): void {}

export function setDefaultFontFamily(fontFamily: string): void {}

export function getFontData(
  family?: string,
  weight?: string | number
): FontData {
  // TODO: Implement font retrieval logic
}
