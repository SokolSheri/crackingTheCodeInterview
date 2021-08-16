const { NodeDoubly, DoublyLinkedList } = require("./linkedlist");

const node1 = new NodeDoubly(6);
const node2 = new NodeDoubly(1);
const node3 = new NodeDoubly(1);
const node4 = new NodeDoubly(2);
const node5 = new NodeDoubly(6);
const list1 = new DoublyLinkedList();
list1.addToTail(node1);
list1.addToTail(node2);
list1.addToTail(node3);
list1.addToTail(node4);
list1.addToTail(node5);

function isPalindrome(list) {
  let p1 = list.head;
  let p2 = list.tail;
  let isPal = true;

  while (p1 !== p2) {
    if (p1.value !== p2.value) {
      isPal = false;
    }
    p1 = p1.next;
    p2 = p2.prev;
  }
  return isPal;
}

console.log(isPalindrome(list1));
