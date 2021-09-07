const { Stack, StackNode } = require("./stack");

class MyQueue {
  constructor() {
    this.stackAlpha = new Stack();
    this.stackBeta = new Stack();
  }
  push(val) {
    this.stackAlpha.push(val);
  }
  pop() {
    while (this.stackAlpha.currentLength > 1) {
      let newer = this.stackAlpha.pop();
      this.stackBeta.push(newer);
    }
    const returnVal = this.stackAlpha.pop();

    while (this.stackBeta.currentLength !== 0) {
      let older = this.stackBeta.pop();
      this.stackAlpha.push(older);
    }

    return returnVal;
  }
}

const queue = new MyQueue();
queue.push(10);
queue.push(5);
queue.push(12);
queue.pop();
console.log(queue.stackAlpha);
