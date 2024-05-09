// Given a stack, sort it using only stack operations (push and pop).

// You can use an additional temporary stack, but you may not copy the elements into any other data structure
// (such as an array). The values in the stack are to be sorted in descending order, with the largest elements on top.

// nextSmallestElement

const sortStack = (stack) => {
  let tempStack = [];

  while (stack.length) {
    let currRemoved = stack.pop();

    while (tempStack.length && tempStack[tempStack.length - 1] > currRemoved) {
      let removed = tempStack.pop();
      stack.push(removed);
    }

    tempStack.push(currRemoved);
  }

  return tempStack;
};

console.log(sortStack([34, 3, 31, 98, 92, 23]));
