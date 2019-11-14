const spacing = (n: number) => (n * 4) + "px";

const breakpoints = {
  sm: 425,
  md: 768,
  lg: 1024,
};

export const breakpoint_up = {
  sm: `@media (min-width: ${breakpoints.sm}x)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
}

const color = {
  primary: '#ff9e00',
  secondary: '#c3ebeb',
  grey: '#ddd',
  lightGrey: '#eee',
  black: 'black',
  white: 'white',
};

const theme = {
  color,
  spacing,
  breakpoints,
};


export default theme;
