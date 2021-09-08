const { Stack, StackNode } = require("./stack");

const sortStack = (unsorted) => {
  const newStack = new Stack();
  while (!unsorted.isEmpty()) {
    let temp = unsorted.pop();

    while (!newStack.isEmpty() && newStack.peak() > temp) {
      unsorted.push(newStack.pop());
    }
    newStack.push(temp);
  }

  while (!newStack.isEmpty()) {
    unsorted.push(newStack.pop());
  }
};

const unsortedStack = new Stack();

unsortedStack.push(5);
unsortedStack.push(1);
unsortedStack.push(9);
unsortedStack.push(3);
unsortedStack.push(10);

sortStack(unsortedStack);
