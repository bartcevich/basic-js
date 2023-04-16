const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numberStep = 0;
  let time = 0;
  let parameters = {};
  numberStep = Math.pow(2, disksNumber) - 1;
  time = Math.trunc(numberStep / turnsSpeed * 3600);
  parameters.turns = numberStep;
  parameters.seconds = time;
  return parameters;
}

module.exports = {
  calculateHanoi
};
