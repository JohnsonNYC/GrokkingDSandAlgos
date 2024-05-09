// Given an array, print the Next Greater Element (NGE) for every element.

// The Next Greater Element for an element x is the first greater element on the right side of x in the array.

// Elements for which no greater element exist, consider the next greater element as -1.

// Input: [4, 5, 2, 25];
// Output: [5, 25, 25, -1];

//  Input: [13, 7, 6, 12];
//  Output: [-1, 12, 12, -1];

const nextLargerElement = (arr) => {
  let res = new Array(arr.length).fill(-1);
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      //while the stack is not empty and the element at the top of the stack
      // is less than or equal to the current element, pop elements from the stack
      stack.pop();
    }
    if (stack.length) {
      // if the stack is not empty after popping, it means the current element
      // has found it's next larger element
      res[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return res;
};

console.log(nextLargerElement([4, 5, 2, 25])); // [5, 25, 25, -1]
console.log(nextLargerElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.log(nextLargerElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5, -1]
