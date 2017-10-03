const expect = require('expect.js');
const binarySearch = require('./binary-search');

describe('Binary Search', function() {
  it('should return true if the item exists in the list', function() {
    const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20 ,30 ,40, 50, 60, 61, 62, 63, 100, 200];
    const target = 6;
    const result = binarySearch(target, sortedList);

    expect(result).to.be(true);
  });

  it('should return false if the item does not exist in the list', function() {
    const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20 ,30 ,40, 50, 60, 61, 62, 63, 100, 200];
    const target = 64;
    const result = binarySearch(target, sortedList);

    expect(result).to.be(false);
  });
});