class Stack {
  constructor() {
    this.top = null;
    this.currentLength = 0;
  }

  push(val) {
    this.currentLength++;
    const node = new StackNode(val);
    let oldTop = this.top;
    this.top = node;
    this.top.next = oldTop;
    return this;
  }

  pop() {
    if (this.top === null) {
      return "stack is already empty";
    } else {
      const topNode = this.top;
      this.top = this.top.next;
      --this.currentLength;
      return topNode.value;
    }
  }

  peak() {
    return this.top;
  }

  isEmpty() {
    if (this.currentLength > 0) {
      return true;
    } else {
      return false;
    }
  }
}

class StackNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

module.exports = { Stack, StackNode };
