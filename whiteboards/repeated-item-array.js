/**
 * Find first repeated item in an array
 * @param  {Array} array
 * @return {item | Error}
 */
const findRepeatedItem = array => {
  const trackingSet = new Set();

  for(let item of array) {
    if (trackingSet.has(item)) {
      return item
    }
    
    trackingSet.add(item)
  }

  throw new Error('No item found');
};

module.exports = findRepeatedItem;
