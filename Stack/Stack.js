class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
  }

  // Method to add an elemnt to the top of the stack
  push(data) {
    // check if stack is already full
    if (this.top === this.stack.length - 1) {
      throw new Error("Stack is full");
    }
    //incement the top pointer and add the data to the stack
    this.stack[++this.top] = data;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    let data = this.stack[this.top];
    this.stack[this.top--] = null;

    return data;
  }

  peek() {
    if (this.isEmpty()) throw new Error("Stack is empty");

    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}
