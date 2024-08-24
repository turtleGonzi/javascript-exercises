const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	return numArr.reduce((acc, number) => {
    return acc + number
  }, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((acc,num) => {
    return acc * num
  },1)
};

const power = function(nem, exponent) {
	return nem ** exponent;
};

const factorial = function(factor) {
  if(factor === 0) return 1
  let sumFact = 1;
	for(let i = factor; i >= 1; i--){
    sumFact *= i;
  }
  return sumFact;
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
