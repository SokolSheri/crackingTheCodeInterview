const { Node, LinkedList } = require("./linkedlist");

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);

const newList = new LinkedList();
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
