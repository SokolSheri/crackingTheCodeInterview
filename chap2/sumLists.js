const { NodeDoubly, DoublyLinkedList } = require("./linkedlist");

const node1 = new NodeDoubly(7);
const node2 = new NodeDoubly(1);
const node3 = new NodeDoubly(6);
const node4 = new NodeDoubly(5);
const node5 = new NodeDoubly(9);
const node6 = new NodeDoubly(2);

const list1 = new DoublyLinkedList();
const list2 = new DoublyLinkedList();
list1.addToTail(node1);
list1.addToTail(node2);
list1.addToTail(node3);
list2.addToTail(node4);
list2.addToTail(node5);
list2.addToTail(node6);

const node1Forward = new NodeDoubly(7);
const node2Forward = new NodeDoubly(1);
const node3Forward = new NodeDoubly(6);
const node4Forward = new NodeDoubly(5);
const node5Forward = new NodeDoubly(9);
const node6Forward = new NodeDoubly(2);

const list1Forward = new DoublyLinkedList();
const list2Forward = new DoublyLinkedList();
list1Forward.addToHead(node1Forward);
list1Forward.addToHead(node2Forward);
list1Forward.addToHead(node3Forward);
list2Forward.addToHead(node4Forward);
list2Forward.addToHead(node5Forward);
list2Forward.addToHead(node6Forward);

function sumLists(list1, list2) {
  let nodeList1 = list1.tail;
  let nodeList2 = list2.tail;

  let total1 = "";
  let total2 = "";
  while (nodeList1 || nodeList2) {
    total1 += nodeList1.value.toString();
    total2 += nodeList2.value.toString();
    nodeList1 = nodeList1.prev;
    nodeList2 = nodeList2.prev;
  }

  const total = (+total1 + +total2).toString();

  const list3 = new DoublyLinkedList();

  for (let i = total.length - 1; i >= 0; i--) {
    let nodey = new NodeDoubly(+total[i]);
    list3.addToTail(nodey);
  }

  return list3;
}

function sumListsForward(list1, list2) {
  let nodeList1 = list1.head;
  let nodeList2 = list2.head;

  let total1 = "";
  let total2 = "";
  while (nodeList1 || nodeList2) {
    total1 += nodeList1.value.toString();
    total2 += nodeList2.value.toString();
    nodeList1 = nodeList1.next;
    nodeList2 = nodeList2.next;
  }

  const total = (+total1 + +total2).toString();
  console.log(total2);
  const list3 = new DoublyLinkedList();

  for (let i = total.length - 1; i >= 0; i--) {
    let nodey = new NodeDoubly(+total[i]);
    list3.addToHead(nodey);
  }

  return list3;
}
sumListsForward(list1Forward, list2Forward);
