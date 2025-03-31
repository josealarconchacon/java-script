/*
Linear Time – O(n)
 - O(n), when the number of operations grows linearly with the size of the input.
    * doubling the input, the time doubles too.
*/

// Sum All Numbers in an Array
function sum(arr) {
  let operation = 0; // O(1)
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    operation += arr[i]; // O(1)
  }
  console.log(`Sum of all number in the array is: ${operation}`);
}
sum([1, 2, 3, 4, 5]); // 15
// Time Complexity: O(n)

// Print Every Element in an Array
function printAllElement(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    console.log(`Element: ${1} -> ${arr[i]}`); // O(1)
  }
}
printAllElement(["🦁", "🐯", "🐻", "🐺"]);

// Find the Maximum Number
function findMax(arr) {
  let max = arr[0]; // O(1)

  for (let i = 1; i < arr.length; i++) {
    // O(n - 1) ≈ O(n)
    if (arr[i] > max) {
      max = arr[i]; // O(1)
    }
  }
  console.log("Max Value:", max); // O(1)
}
findMax([3, 9, 1, 7, 5]); // 9
// Time Complexity: O(n)

// Count Even Numbers
function countEvenNum(arr) {
  let count = 0; //O(1)
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // O(1)
      count += 1;
    }
  }
  console.log("Even numbers:", count); // O(1)
}
countEvenNum([1, 3, 4, 5, 7, 9]); // Even numbers: 1
// Time Complexity: O(n)

// Reverse a String
function reverse(str) {
  output = ""; // O(1)
  // O(n)
  for (let s = str.length - 1; s >= 0; s--) {
    output += str[s]; // // O(1)
  }
  console.log("Reversed:", output); // O(1)
}
reverse("hello");
// Time Complexity: O(n)
