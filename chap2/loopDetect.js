const { NodeDoubly, DoublyLinkedList } = require("./linkedlist");

const node1 = new NodeDoubly(6);
const node2 = new NodeDoubly(1);
const node3 = new NodeDoubly(1);
const list1 = new DoublyLinkedList();
list1.addToTail(node1);
list1.addToTail(node2);
list1.addToTail(node3);
list1.addToTail(node1);

let memo = [];

function loopDetect(ll) {
  let node = ll.head;

  while (node) {
    if (memo.includes(node)) {
      return node;
    }

    memo.push(node);
    node = node.next;
  }

  return false;
}

console.log(loopDetect(list1));
