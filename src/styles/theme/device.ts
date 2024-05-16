export const deviceSizes = {
  mobile: 320,
  tablet: 600,
  desktop: 1280,
};

export const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile}px) and (max-width: ${deviceSizes.tablet}px)`,
  tablet: `screen and (min-width: ${deviceSizes.tablet}px) and (max-width: ${deviceSizes.desktop}px)`,
  desktop: `screen and (min-width: ${deviceSizes.desktop}px)`,
};
