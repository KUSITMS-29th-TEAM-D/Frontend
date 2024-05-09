interface Font {
  font: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ font, weight, size, lineHeight }: Font): string => {
  return `
    font-family : "${font}";
    font-weight: ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    `;
};

export const font = {
  desktop: {
    d1: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 82,
      lineHeight: 100,
    }),
    d2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 65,
      lineHeight: 80,
    }),
    h1: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 700,
      size: 50,
      lineHeight: 60,
    }),
    h2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 700,
      size: 40,
      lineHeight: 50,
    }),
    title1: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 700,
      size: 32,
      lineHeight: 40,
    }),
    title2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 25,
      lineHeight: 32,
    }),
    body1b: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 700,
      size: 20,
      lineHeight: 28,
    }),
    body1m: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 18,
      lineHeight: 28,
    }),
    body1r: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 400,
      size: 18,
      lineHeight: 28,
    }),
    body2m: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 16,
      lineHeight: 24,
    }),
    body2r: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 400,
      size: 16,
      lineHeight: 24,
    }),
    label1m: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 14,
      lineHeight: 20,
    }),
    label1r: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 400,
      size: 14,
      lineHeight: 20,
    }),
    label2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 12,
      lineHeight: 20,
    }),
  },
  mobile: {
    d1: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 58,
      lineHeight: 64,
    }),
    d2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 45,
      lineHeight: 56,
    }),
    h1: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 36,
      lineHeight: 44,
    }),
    h2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 28,
      lineHeight: 32,
    }),
    title1: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 700,
      size: 22,
      lineHeight: 28,
    }),
    title2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 16,
      lineHeight: 24,
    }),
    body1b: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 700,
      size: 16,
      lineHeight: 24,
    }),
    body1m: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 16,
      lineHeight: 24,
    }),
    body1r: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 400,
      size: 16,
      lineHeight: 24,
    }),
    body2m: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 14,
      lineHeight: 20,
    }),
    body2r: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 400,
      size: 14,
      lineHeight: 20,
    }),
    label1m: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 14,
      lineHeight: 20,
    }),
    label1r: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 400,
      size: 14,
      lineHeight: 20,
    }),
    label2: FONT({
      font: 'Spoqa Han Sans Neo',
      weight: 500,
      size: 12,
      lineHeight: 20,
    }),
  },
};
