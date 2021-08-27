const { Stack, StackNode } = require("./stack");

class SetOfStacks {
  constructor(threshold) {
    this.allStacks = [];
    this.threshold = threshold;
    this.recentStackIdx = 0;
  }

  push(val) {
    if (!this.allStacks[this.recentStackIdx]) {
      const stack = new Stack();
      this.allStacks.push(stack);
    } else if (
      this.allStacks[this.recentStackIdx].currentLength === this.threshold
    ) {
      ++this.recentStackIdx;
      const stack = new Stack();
      this.allStacks.push(stack);
    }
    this.allStacks[this.recentStackIdx].push(val);
  }

  pop() {
    if (!this.allStacks[this.recentStackIdx]) {
      return false;
    } else {
      let returnVal;
      if (this.allStacks[this.recentStackIdx].currentLength === 1) {
        returnVal = this.allStacks[this.recentStackIdx].pop();
        this.allStacks.pop();
        --this.recentStackIdx;
      } else {
        returnVal = this.allStacks[this.recentStackIdx].pop();
      }

      return returnVal;
    }
  }

  popAt(idx) {
    if (!this.allStacks[idx]) {
      return false;
    } else {
      let returnVal = this.allStacks[idx].pop();
      if (this.allStacks[idx].currentLength === 0) {
        if (idx > -1) {
          this.allStacks.splice(idx, 1);
        }
        --this.recentStackIdx;
      }
      return returnVal;
    }
  }
}

const setOfStacks = new SetOfStacks(2);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(10);
setOfStacks.push(11);
setOfStacks.push(21);
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
console.log(setOfStacks.pop());
