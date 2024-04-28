const deviceSizes = {
  mobile: '320px',
  tablet: '600px',
  desktop: '1280px',
};

export const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile}) and (max-width: ${deviceSizes.tablet})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.desktop})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop})`,
};
