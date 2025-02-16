class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // push()
  push(value) {
    // Create a new node
    const newNode = new Node(value);
    // If the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, link the current tail's `next` to the new node
      this.tail.next = newNode;
      // Set the new node's `previous` pointer to point back to the current tail
      newNode.previous = this.tail;
      // Update the tail to be the new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let doublyLinkedList = new DoublyLinkedList(1);
// console.log(doublyLinkedList);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
console.log(doublyLinkedList);
