// Given a string, write a function that uses a stack to reverse the string. The function should return the
// reversed string.

const reverseString = (s) => {
  let stack = [...s];
  let reversed = "";
  while (stack.length) {
    reversed += stack.pop();
  }

  return reversed;
};

console.log(reverseString("Hello, World!"));
