import { DefaultTheme } from 'styled-components';

import { color } from '@/styles/theme/color';
import { font } from '@/styles/theme/font';

export type ColorTypes = typeof color;
export type FontTypes = typeof font;
export const theme: DefaultTheme = {
  color,
  font,
};
