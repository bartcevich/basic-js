const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(members == null){return false;}
  let result=[];
  let result1='';
  for (let i = 0; i < members.length; i++){
    if(typeof members[i] == 'string'){
      result.push(members[i].trim().toUpperCase().slice(0,1));
    }
  }
  result1=result.slice().sort().join('');
  if(result1 === ''){return false;
  }else{return result1;}
}

module.exports = {
  createDreamTeam
};
