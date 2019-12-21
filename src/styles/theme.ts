const spacing = (n: number) => `${Math.round(n) * 4}px`;

const breakpoints = {
  sm: 425,
  md: 768,
  lg: 1024,
};

export const media_breakpoint_up = {
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
};

const zIndex = {
  header: 1,
  overlay: 2,
};

const color = {
  primary: '#ff9e00',
  secondary: '#c3ebeb',
  grey: '#ddd',
  lightGrey: '#eee',
  black: 'black',
  white: 'white',
};

const theme = {
  breakpoints,
  color,
  spacing,
  zIndex,
};

export default theme;
