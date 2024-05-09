class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;

    if (this.head !== null) this.head.prev = newNode;

    this.head = newNode;
  }

  insertAfter(prev_node, val) {
    if (prev_node === null) {
      console.log("The given node must be in the linkedlist");
      return;
    }

    let newNode = new Node(val);

    newNode.next = prev_node.next;
    newNode.prev = prev_node;
    prev_node.next = newNode;

    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    }
  }

  delete(key) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === key) {
        // If the node with the specified key is found, remove it from the list
        if (temp.prev !== null) temp.prev.next = temp.next;
        else this.head = temp.next;
        if (temp.next !== null) temp.next.prev = temp.prev;
        return;
      }
      temp = temp.next;
    }
  }

  search(key) {
    let current = this.head;
    while (current !== null) {
      if (current.val === key) return true; // Return true if the key is found in the list
      current = current.next;
    }
    return false; // Return false if the key is not found in the list
  }
}
