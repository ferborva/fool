const binarySearch = (target, list, start = 0, end = (list.length - 1)) => {
  const middle = Math.floor((start + end) / 2);
  const middleValue = list[middle];

  if (end < start) {
    return false;
  }

  return target === middleValue
    ? true
    : target < middleValue
      ? binarySearch(target, list, start, middle - 1)
      : binarySearch(target, list, middle + 1, end)
};

module.exports = binarySearch;
