/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let a = 1;
  let b = '';
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === arr[i + 1]) {
      a++;
    } else {
      b += a > 1 ? `${a}${arr[i]}` : arr[i];
      a = 1;
    }
  }
  return b;
}

module.exports = encodeLine;
