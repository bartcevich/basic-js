const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let number = String(n).split('');
  let complect = [];
  let result = [];
  for (let i = 0; i < number.length; i++){
    complect.push([]);
    for (let r = 0; r < number.length; r++){
      if(i !== r){
        complect[i].push(number[r])
      }
    }
    result.push(complect[i].join(''))
  }
  result.sort();
  return Number(result[result.length-1]);
}

module.exports = {
  deleteDigit
};
