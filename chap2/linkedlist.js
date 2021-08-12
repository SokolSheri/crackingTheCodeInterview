class Node {
  constructor(val, prev, next) {
    this.value = val;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    if (this.tail) {
      this.tail.next = node;
      let prevNewTail = this.tail;
      this.tail = node;
      this.tail.prev = prevNewTail;
    } else {
      this.tail = this.head = node;
    }
  }

  addToHead(node) {
    if (this.head) {
      this.head.prev = node;
      let nextNewHead = this.head;
      this.head = node;
      this.head.next = nextNewHead;
    } else {
      this.head = this.tail = node;
    }
  }

  removeNode(value, node = this.head) {
    if (!node) {
      return;
    }

    if (node.value === value) {
      let previousNode = node.prev;
      let nextNode = node.next;
      if (!node.next) {
        previousNode.next = null;
        this.tail = previousNode;
      } else if (!node.prev) {
        nextNode.prev = null;
        this.head = nextNode;
      } else {
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
      }
    }

    return this.removeNode(value, node.next);
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);

const newList = new LinkedList();
newList.addToTail(node1);
newList.addToTail(node2);
newList.addToTail(node3);
newList.addToTail(node4);
newList.removeNode(2);

module.exports = {
  Node,
  LinkedList,
};
