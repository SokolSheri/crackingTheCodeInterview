const { NodeDoubly, DoublyLinkedList } = require("./linkedlist");

const node1 = new NodeDoubly(1);
const node2 = new NodeDoubly(10);
const node3 = new NodeDoubly(5);
const node4 = new NodeDoubly(2);

const newList = new DoublyLinkedList();
newList.addToTail(node1);
newList.addToTail(node2);
newList.addToTail(node3);
newList.addToTail(node4);

const partition = (x, ll) => {
  let node = ll.head;
  let returnList = new DoublyLinkedList();
  for (let i = 0; i < ll.depth; i++) {
    if (!node) {
      break;
    }
    let newNode = new NodeDoubly(node.value);
    if (node.value >= x) {
      returnList.addToTail(newNode);
    } else {
      returnList.addToHead(newNode);
    }
    node = node.next;
  }

  return returnList;
};

partition(5, newList);
