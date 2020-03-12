const dedupeArray = <T>(array: T[]): T[] => {
  return array.filter((value, index) => array.indexOf(value) === index);
};

export default dedupeArray;
