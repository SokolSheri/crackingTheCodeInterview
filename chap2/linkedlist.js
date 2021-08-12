class NodeDoubly {
  constructor(val, prev, next) {
    this.value = val;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.depth = 0;
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
    ++this.depth;
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
    ++this.depth;
  }

  removeAllNodesWithThisVal(value, node = this.head) {
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

    return this.removeAllNodesWithThisVal(value, node.next);
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

      return true;
    }

    return this.removeNode(value, node.next);
  }
}

class NodeSingly {
  constructor(val, next) {
    this.value = val;
    this.next = next || null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.depth = 0;
  }

  addToTail(node) {
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.tail = this.head = node;
    }

    ++this.depth;
  }

  addToHead(node) {
    if (this.head) {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    } else {
      this.head = this.tail = node;
    }
    ++this.depth;
  }
}
const node1 = new NodeSingly(1);
const node2 = new NodeSingly(2);
const node3 = new NodeSingly(3);
const node4 = new NodeSingly(2);

const newList = new SinglyLinkedList();
newList.addToHead(node1);
newList.addToHead(node2);
newList.addToTail(node3);
newList.addToTail(node4);

module.exports = {
  NodeDoubly,
  DoublyLinkedList,
  NodeSingly,
  SinglyLinkedList,
};
