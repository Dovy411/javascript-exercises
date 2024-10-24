const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
  return num1-num2;
};

const sum = function(list) {
	let multiplyList = 0;

  for (let i = 0; i < list.length; i++) {
    multiplyList += list[i];
  }
  return multiplyList;
};

const multiply = function(list) {
  let multiplyList = 1;

  for (let i = 0; i < list.length; i++) {
    multiplyList *= list[i];
  }
  return multiplyList;
};

const power = function(num1,num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

