const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr2sort = [...arr];
  arr2sort.sort((a,b)=>a-b);
  let result = [];
  let iUse = arr.length-1;
  for (let i = arr.length-1; i >= 0; i--){
    if(arr[i] === -1){
      result.unshift(-1)
    }else{
      result.unshift(arr2sort[iUse]);
      iUse -=1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
