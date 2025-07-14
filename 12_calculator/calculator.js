const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  let total = 0
	for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total
};

const multiply = function(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
    let total = 1
	for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(factorial) {
  total = 1
  for (let index = 2; index <= factorial; index++) {
    total = index * total 
  }
  return total
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
