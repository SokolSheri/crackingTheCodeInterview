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

  removeNode(value) {
    let notFound = true;
    let returnThisNode;
    if (this.head.value === value) {
      returnThisNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      return returnThisNode;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (this.tail.value === value) {
        returnThisNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return returnThisNode;
      }
      if (currentNode.value === value) {
        notFound = false;
        returnThisNode = currentNode;
        currentNode.prev = currentNode.next;
        return returnThisNode;
      }
    }
  }
}
