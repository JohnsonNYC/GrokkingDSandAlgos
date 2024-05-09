class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Singly Linked List
export class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val); // Create a new node
    newNode.next = this.head; // Point the new node's next to the current head
    this.head = newNode; // Update the head of the list to the new node;
  }

  insertAfter(prev_node, val) {
    if (prev_node === null) {
      console.log("The given previous node must be in the LinkedList");
      return;
    }

    let newNode = new Node(val); // Create a new node
    newNode.next = prev_node.next; // Update the new node's next to prev_node's next
    prev_node.next = newNode; // update prev_node's next to the new node;
  }

  delete(key) {
    let temp = this.head,
      prev = null;

    //if they head holds the key to be deleted
    if (temp !== null && temp.data == key) {
      this.head = temp.next;
      return;
    }

    // Search for the key to be deleted
    while (temp != null && temp.data !== key) {
      prev = temp; // keep track of the previous node
      temp = temp.next; // move to the next node
    }

    //if key was not present in the list
    if (temp === null) return;
    // unlink the node from the list;
    prev.next = temp.next;
  }

  search(key) {
    let current = this.head;
    while (current !== null) {
      if (current.data === key) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

// let list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
