// Implement an algo to find the kth to last element of a singly linked list
const { NodeSingly, SinglyLinkedList } = require("./linkedlist");
const node1 = new NodeSingly(1);
const node2 = new NodeSingly(2);
const node3 = new NodeSingly(3);
const node4 = new NodeSingly(2);
const newList = new SinglyLinkedList();
newList.addToHead(node1);
newList.addToHead(node2);
newList.addToTail(node3);
newList.addToTail(node4);

const kthToLast = (howFarFromEnd, ll) => {
  const length = ll.depth - howFarFromEnd;
  if (length < 0) {
    return false;
  }

  let node = ll.head;
  for (let i = 0; i < length; i++) {
    node = node.next;
  }
  return node;
};

console.log(kthToLast(3, newList));
