class MyArray {
  constructor() {
    this.length = 0; // length of the array
    this.data = {}; // data storage
  }
  // get method to get the data at a specific index
  get(index) {
    return this.data[index]; // return data at index
  }

  // push method to add data to the end of the array
  push(item) {
    this.data[this.length] = item; // add item to data
    this.length++; // increment length
    return this.length; // return new length
  }

  // pop method to remove the last item from the array
  pop() {
    const lastItem = this.data[this.length - 1]; // get last item
    delete this.data[this.length - 1]; // delete last item
    this.length--; // decrement length
    return lastItem; // return last item
  }

  // delete method to remove an item at a specific index
  delete(index) {
    const item = this.data[index]; // get item at index
    this.shiftItems(index); // shift items to fill the gap
    return item; // return deleted item
  }

  // shiftItems method to shift items to fill the gap
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // shift items to the left
    }
    delete this.data[this.length - 1]; // delete last item
    this.length--; // decrement length
    return this.data; // return data
  }
}

const newArray = new MyArray(); // create new array
newArray.push("hi"); // add "hi" to array
newArray.push("there"); // add "there" to array
newArray.push("how"); // add "how" to array
console.log(newArray); // MyArray { length: 2, data: { '0': 'hi', '1': 'there' } }

newArray.pop(); // remove last item
console.log(newArray); // MyArray { length: 1, data: { '0': 'hi' } }

newArray.delete(0); // delete item at index 0
console.log(newArray); // MyArray { length: 0, data: {} }

module.exports = MyArray;
