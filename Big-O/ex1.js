// --------------------------
// Constant Time – O(1)
// --------------------------

// Accessing an Element in an Array
const arr = [10, 20, 30, 40, 50];
console.log(arr[3]); // O(1), Always returns index of 3, 40 instantly, no matter the array size

// Inserting at the End of an Array
arr.push(4); // Usually O(1)
console.log(arr);

// Hash Table Lookup
const user = { Sam: 90, Bob: 87 };
console.log(user["Sam"]); // Looking up a value in an object by key is O(1)

// Example: Input size: 3 elements → 1 operation
// Example: Input size: 3000 elements → 1 operation
function isFirstNumZero(arr) {
  return arr[0] == 0;
}

// Loop Runs a Fixed Number of Times
function printFirstFiveNumbers(arr) {
  // O(1)
  for (let i = 0; i < 5; i++) {
    // O(1) - runs 5 times only
    console.log("i:", i); // O(1)
  }
  // Total: O(1)
}

// Output:
printFirstFiveNumbers();
// i: 0
// i: 1
// i: 2
// i: 3
// i: 4

function printFirstThreeItems(arr) {
  // O(1)
  for (let i = 0; i < 3; i++) {
    // O(1) - max 3 iterations
    if (i < arr.length) {
      // O(1)
      console.log("Item", i, "→", arr[i]); // O(1)
    }
  }
  // Total: O(1)
}
printFirstThreeItems(["apple", "banana", "cherry", "date", "mango"]);
// Item 0 → apple
// Item 1 → banana
// Item 2 → cherry

// Fixed Nested Loop
function printGrid() {
  // O(1)
  for (let i = 0; i < 3; i++) {
    // O(1)
    for (let j = 0; j < 3; j++) {
      // O(1)
      console.log(`Row ${i}, Col ${j}`); // O(1)
    }
  }
  // Total: O(1)
}

printGrid();
// Row 0, Col 0
// Row 0, Col 1
// Row 0, Col 2
// Row 1, Col 0
// Row 1, Col 1
// Row 1, Col 2
// Row 2, Col 0
// Row 2, Col 1
// Row 2, Col 2
