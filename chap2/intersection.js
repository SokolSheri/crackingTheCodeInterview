const { NodeSingly, SinglyLinkedList } = require("./linkedlist");
const node1 = new NodeSingly(1);
const node2 = new NodeSingly(2);
const node3 = new NodeSingly(3);
const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.addToHead(node1);
list1.addToHead(node2);
//list2.addToHead(node1);
list2.addToHead(node3);

const intersection = (ll1, ll2) => {
  let node1 = ll1.head;
  while (node1) {
    let node2 = ll2.head;
    while (node2) {
      if (node1 === node2) {
        return node1;
      }

      node2 = node2.next;
    }
    node1 = node1.next;
  }

  return false;
};

console.log(intersection(list1, list2));
