const capitalise = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

/**
 * Format string as price with two decimals (`0,00`)
 */
const formatPrice = (string: string): string => {
  const [number, decimal = ''] = string.split(',');

  return `${number || 0},${decimal.padEnd(2, '0')}`;
};

/**
 * Format string as price without decimals (`0,-`)
 */
const formatRoundedPrice = (string: string): string => {
  const [number] = string.split(',');

  return `${number || 0},-`;
};

export default {
  capitalise,
  formatPrice,
  formatRoundedPrice,
};
