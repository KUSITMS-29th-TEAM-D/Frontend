import { DefaultTheme } from 'styled-components';

const colors = {
  black: '#000000', // 예시
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
