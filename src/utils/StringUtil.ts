const capitalise = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

const formatPrice = (string: string): string => {
  const [number, decimal = ''] = string.split(',');

  return `${number || '0'},${decimal.padEnd(2, '0')}`;
};

export default {
  capitalise,
  formatPrice,
};
