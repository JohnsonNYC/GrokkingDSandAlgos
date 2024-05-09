// Given a queue, return it after reversing its elements.
// Hint: Make use of a stack;

const reverseQueue = (queue) => {
  let stack = [];

  while (!queue.length == 0) {
    let char = queue.shift();
    stack.push(char);
  }

  while (stack.length !== 0) {
    let char = stack.pop();
    queue.push(char);
  }

  return queue;
};

console.log(reverseQueue([1, 2, 3, 4, 5]));
