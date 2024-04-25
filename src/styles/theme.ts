import { DefaultTheme } from 'styled-components';

const colors = {
  black: '#000000',
  white: '#ffffff',

  // Primary
  primary900: '#3d2669',
  primary800: '#50328a',
  primary700: '#6740b2',
  primary600: '#8452e4',
  primary500: '#915afb',
  primary400: '#a77bfc',
  primary300: '#b590fc',
  primary200: '#ccb3fd',
  primary100: '#ddccfe',
  primary50: '#f4efff',

  // Secondary
  secondary900: '#66273b',
  secondary800: '86334e#',
  secondary700: '#ad4164',
  secondary600: '#de5480',
  secondary500: '#f45c8d',
  secondary400: '#f67da4',
  secondary300: '#f892b3',
  secondary200: '#fab4cb',
  secondary100: '#fcccdc',
  secondary50: '#feeff4',

  // Gray Scale
  gray900: '#171717',
  gray800: '#242424',
  gray700: '#333333',
  gray600: '#555555',
  gray500: '#6f6f6f',
  gray400: '#8b8b8b',
  gray300: '#a5a5a5',
  gray250: '#c1c1c1',
  gray200: '#dfdfdf',
  gray150: '#efefef',
  gray100: '#f7f7f7',
  gray50: '#fbfbfb',
} as const;

interface Font {
  font: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ font, weight, size, lineHeight }: Font): string => {
  return `
    font-family : "${font}";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}%;
    `;
};

const fonts = {
  example: FONT({
    font: '',
    weight: 0,
    size: 0,
    lineHeight: 0,
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
