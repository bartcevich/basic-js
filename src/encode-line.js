const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let sum = '';
  for (let i=0; i<str.length; i++){
  if(str[i] !== str[i+1]){
    arr.push(sum);//матрица масивов
    arr.push(str[i]);
    sum = '';
  }else if(sum === ''){sum=2;
  }else{sum = sum + 1;}
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
