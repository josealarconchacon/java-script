class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // create a new node, then pass the linked list constructor value to the newNode
    const newNode = new Node(value);
    // assign the new node to the head of the linked list
    this.head = newNode;
    // set the tail of the linked list to the new node
    this.tail = newNode;
    // set the length of the linked list to 1
    this.length = 1;
  }

  // push(), add a new node to the end of the linked list
  push(value) {
    const newNode = new Node(value);
    // If the linked list is empty, head is null
    if (!this.head) {
      // Set the new node as both the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // Return the updated linked list
    return this;
  }

  // pop(), remove last node from the end of the linked list
  pop() {
    // If the linked list is empty, head is null
    if (!this.head) {
      return undefined;
    }
    // keep track of the node before the end
    let temporary = this.head;
    let previous = this.head;
    // Traverse the linked list to find the second last node
    while (temporary.next) {
      previous = temporary;
      temporary = temporary.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temporary;
  }

  // unshift()
  unshift(value) {
    const newNode = new Node(value);
    // If the linked list is empty, head is null
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // shift
  shift() {
    // If the linked list is empty, head is null
    if (!this.head) {
      return undefined;
    }
    // keep track of the node before the end
    let temporary = this.head;
    // move the head to the next value
    this.head = this.head.next;
    temporary.next = null;
    this.length--;
    // if the list is empty after shifting
    if (this.length == 0) {
      this.tail = null;
    }
    return temporary;
  }

  // get()
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let temporary = this.head;
    for (let i = 0; i < index; i++) {
      temporary = temporary.next;
    }
    return temporary;
  }

  // set()
  set(index, value) {
    if (index < 0 || index >= this.length) {
      return false; // Index is out of bounds
    }

    let temporary = this.get(index); // Get the node at index
    if (temporary) {
      temporary.value = value; // Update node's value
      return true; // Successfully updated
    }

    return false; // Node not found
  }

  // insert()
  insert(index, value) {
    // If the index is 0, insert at the head of the list using `unshift`
    if (index === 0) {
      this.unshift(value);
    }

    // If the index is equal to the current length, insert at the tail using `push`
    if (index === this.length) {
      this.push(value);
    }

    // If the index is out of bounds (negative or greater than/equal to the length), return false
    if (index < 0 || index >= this.length) {
      return false; // Index is out of bounds
    }

    const newNode = new Node(value); // Create a new node with the specified value
    const temporary = this.get(index - 1); // Get the node just before the desired index
    newNode.next = temporary.next; // Link the new node to the next node in the list
    temporary.next = newNode; // Link the previous node to the new node
    this.length++;
    return true;
  }
}

// create a new LinkedList
const list = new LinkedList(10);

console.log("Before update:", JSON.stringify(list, null, 2));
list.push(1);
list.push(2);
list.push(3);
// list.pop();
// console.log(list);

// list.unshift(45);
// console.log(list);

// list.shift();
// console.log(list);

// console.log(list.get(2));
// console.log(list);

// list.set(1, 4);

list.insert(1, 6);

console.log("After update:", JSON.stringify(list, null, 2));
