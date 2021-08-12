// Write code to remove duplicates from an unsorted linked list

const { NodeDoubly, DoublyLinkedList } = require("./linkedlist");

const node1 = new NodeDoubly(1);
const node2 = new NodeDoubly(2);
const node3 = new NodeDoubly(3);
const node4 = new NodeDoubly(2);

const newList = new DoublyLinkedList();
newList.addToTail(node1);
newList.addToTail(node2);
newList.addToTail(node3);
newList.addToTail(node4);

const removeDups = (ll) => {
  let memo = {};
  return function checkForDups(node = ll.head) {
    if (!node) {
      return ll;
    }

    if (memo[node.value]) {
      ll.removeNode(node.value);
    } else {
      memo[node.value] = 1;
    }

    return checkForDups(node.next);
  };
};

console.log(removeDups(newList)());
