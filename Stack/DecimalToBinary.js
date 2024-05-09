// Given a positive integer n, write a function that returns its binary equivalent as a string.
//  The function should not use any in-built binary conversion function.
const num = 2;
const decimalToBinary = (num) => {
  let stack = [];

  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  return stack.reverse().join("");
};

console.log(decimalToBinary(2));
console.log(decimalToBinary(7));
console.log(decimalToBinary(18));
