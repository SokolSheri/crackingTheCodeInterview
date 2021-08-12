const { NodeSingly, SinglyLinkedList } = require("./linkedlist");
const node1 = new NodeSingly("a");
const node2 = new NodeSingly("b");
const node3 = new NodeSingly("c");
const node4 = new NodeSingly("d");
const node5 = new NodeSingly("e");
const node6 = new NodeSingly("f");
const newList = new SinglyLinkedList();
newList.addToHead(node1);
newList.addToTail(node2);
newList.addToTail(node3);
newList.addToTail(node4);
newList.addToTail(node5);
newList.addToTail(node6);

const deleteMiddleNode = (ll) => {
  let middle = ll.depth / 2;
  let count = 0;
  return function nextNode(node = ll.head, lastNode) {
    ++count;
    if (!node) {
      return false;
    }
    if (middle === count) {
      lastNode.next = node.next;
      --ll.depth;
      return ll;
    } else {
      return nextNode(node.next, node);
    }
  };
};

console.log(deleteMiddleNode(newList)());
