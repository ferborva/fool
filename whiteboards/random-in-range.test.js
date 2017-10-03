const expect = require('expect.js');
const randomInRange = require('./random-in-range');

describe('Random In Range | Unit', function() {
  it('should return a number within the specified range', function() {
    const start = 0;
    const before = 100;
    const result = randomInRange(start, before);

    expect(result).to.be.within(start, before);
    expect(result).not.to.be(before);
  });

  it('should return an integer', function() {
    const start = 0;
    const before = 10;
    const result = randomInRange(start, before);
    const parsedResult = Number.parseInt(result);

    expect(result).to.be(parsedResult);
  });
});
