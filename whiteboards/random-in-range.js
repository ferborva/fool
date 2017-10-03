/**
 * Random integer in defined range
 * @param  {Number} start
 * @param  {Number} before
 * @return {Number}
 */
const randomInRange = (start, before) => {
  return Math.floor(start + Math.random() * (before - start));
}

module.exports = randomInRange;