const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a = s1.split('').sort();
  let b = s2.split('').sort();
  let count = 0;
  for (let i = 0; i < a.length; i++){
    for (let r = 0; r < b.length; r++){
      if(a[i] === b[r]){
      count +=1;
      b.splice(r, 1);
      //a.splice(i, 1);
      break;
    }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
