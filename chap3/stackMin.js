class Stack {
  constructor() {
    this.top = null;
    this.min = null;
    this.currentLength = 0;
  }

  push(val) {
    this.currentLength++;
    const node = new StackNode(val, this.min);
    if (val < this.min) {
      this.min = val;
    } else if (this.min === null) {
      this.min = val;
    }
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
      if (topNode.value === this.min) {
        this.min = topNode.min;
      }
      --this.currentLength;
      return topNode.value;
    }
  }

  peak() {
    return this.top;
  }

  isEmpty() {
    if (this.currentLength > 0) {
      return false;
    } else {
      return true;
    }
  }

  minimum() {
    return this.min;
  }
}

class StackNode {
  constructor(val, min) {
    this.value = val;
    this.next = null;
    this.min = min;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(3);
stack.push(7);
stack.pop();
stack.pop();

console.log(stack.minimum());
