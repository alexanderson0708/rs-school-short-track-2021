/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let b = String(n).split('');
  let a = 0;
  for (let i = 0; i < b.length; i++) {
    b.splice(i, 1);
    if (Number(b.join('')) > a) {
      a = Number(b.join(''));
    }
    b = String(n).split('');
  }
  return a;
}

module.exports = deleteDigit;
