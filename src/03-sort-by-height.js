/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let v = 0;
  const newarr = arr;
  const q = newarr.filter((i) => i !== -1).sort((a, b) => a - b);
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] !== -1) {
      newarr[i] = q[v];
      v++;
    }
  }
  return newarr;
}

module.exports = sortByHeight;
