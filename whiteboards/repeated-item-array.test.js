const expect = require('expect.js');
const findRepeated = require('./repeated-item-array');

describe('Find Repeated Item in Array', function() {
  it('should return the first repeated item', function() {
    const array = [1, 2, 3, 4, 5, 2, 6];
    const result = findRepeated(array);

    expect(result).to.be(2);
  });

  it('should throw if there is no repeated item', function() {
    const array = [1, 2, 3, 4, 5, 6];

    expect(findRepeated).withArgs(array).to.throwException();
  });
});