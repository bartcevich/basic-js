const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let number = String(n).split('');
  let sum = 0;
    for (let i = 0; i < number.length; i++){
    sum = sum + Number(number[i]);
  }
  if(sum > 9){
    let number2 = String(sum).split('');
    let sum2 = 0;
    for (let i = 0; i < number2.length; i++){
    sum2 = sum2 + Number(number2[i]);
  }
  return sum2
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
