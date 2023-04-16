const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1=[];
  for (let i = 0; i < arr.length; i++){
    if(i===0&&arr[i]==='--discard-prev' || i===0&&arr[i]==='--double-prev'){
      return "Error'arr' parameter must be an instance of the Array!arrArray";
  }else if(arr[i]==='--discard-prev'&&arr[i-1]===arr1[i-1]){arr1.pop();
  }else if(arr[i]==='--double-prev'){arr1.push(arr[i-1]);
  }else if(i===arr.length-1 && arr[i]==='--discard-next'){
    return "Error'arr' parameter must be an instance of the Array!arrArray";    
  }else if(i===arr.length-1 && arr[i]==='--double-next'){
    return "Error'arr' parameter must be an instance of the Array!arrArray";
  }else if(arr[i]==='--double-next'&&arr[i]<=9){arr1.push(arr[i+1]);
  }else if(arr[i]==='--discard-next'){i=i+1;
  }else if(typeof(arr[i]) === 'number'&&arr[i]<=9){arr1.push(arr[i]);}
}
return arr1;
}

module.exports = {
  transform
};
