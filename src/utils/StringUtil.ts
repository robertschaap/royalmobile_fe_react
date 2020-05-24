const capitalise = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

export default {
  capitalise,
};
