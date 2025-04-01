/*
Quadratic Time – O(n²)
*/

//  Print All Pairs of Elements
function allPairs(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // O(1)
    }
  }
  // Total: O(n × n) → O(n²)
}
allPairs([1, 2, 3, 4]);

// Check for Duplicate Pairs
function hasDuplicate(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      // O(1)
      if (i !== j && arr[i] === arr[j]) {
        console.log(`Duplicate Found ${arr[i]}`);
        return true;
      }
    }
  }
  console.log("No duplicates found");
  return false;
  // Total: O(n²)
}
hasDuplicate([1, 2, 3, 4, 2]);
// Output: Duplicate found: 2

// Multiply Every Pair of Numbers
function multiplyPairs(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} × ${arr[j]} = ${arr[i] * arr[j]}`); // O(1)
    }
  }
  // Total: O(n²)
}

multiplyPairs([1, 2, 3]);
// Output:
// 1 × 1 = 1
// 1 × 2 = 2
// 1 × 3 = 3

// Brute-Force Substring Match
function bruteForceMatch(str, target) {
  // O(n)
  for (let i = 0; i < str.length; i++) {
    // O(n) worst-case if target ~ str
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) break; // O(1)
      if (j === target.length - 1) {
        console.log(`Match found at index ${i}`);
        return true;
      }
    }
  }
  console.log("No match found");
  return false;
}
bruteForceMatch("hello world", "world");
// Output: Match found at index 6
// Time Complexity: O(n²) in worst case

// Simple Bubble Sort
function bubbleSort(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // O(1)
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("Sorted:", arr);
  // Total: O(n²)
}
bubbleSort([5, 3, 1, 4, 2]);
// Output: Sorted: [1, 2, 3, 4, 5]
