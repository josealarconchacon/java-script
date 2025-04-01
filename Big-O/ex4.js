/*
Logarithmic Time
*/

// Binary Search
function binarySearch(arr, target) {
  let leftSide = 0; // O(1)
  let rightSide = arr.length - 1; // O(1)

  // O(log n)
  while (leftSide <= rightSide) {
    let mid = Math.floor((leftSide + rightSide) / 2); // O(1)
    console.log(`Check index: ${mid}`);

    if (arr[mid] === target) {
      console.log(`Index Found at: ${mid}`);
      return mid;
    } else if (arr[mid] < target) {
      leftSide = mid + 1; // Cut rightSide half
    } else {
      rightSide = mid - 1; // Cut leftSide half
    }
  }
  console.log("Not found");
  return -1;
}
binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 9);
// Time Complexity: O(log n)
// Checking index: 3
// Checking index: 5
// Checking index: 4
// Found at index: 4

// Divide Input Until ≤ 1
function halveUntilOne(n) {
  // O(log n)
  while (n > 1) {
    console.log("n is:", n);
    n = Math.floor(n / 2); // Halving every time
  }
  console.log("Done");
  // Total: O(log n)
}
halveUntilOne(32);
// Output:
// n is: 32
// n is: 16
// n is: 8
// n is: 4
// n is: 2
// Done

// Search in Binary Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeSearch(root, target) {
  if (!root) return false; // O(1)
  console.log("Checking:", root.val);

  if (root.val === target) return true;
  if (target < root.val) {
    return binaryTreeSearch(root.left, target); // O(log n) in balanced tree
  } else {
    return binaryTreeSearch(root.right, target); // O(log n) in balanced tree
  }
}
// Setup a basic BST
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(7);
root.right.left = new Node(12);
root.right.right = new Node(20);

binaryTreeSearch(root, 7);
// Time Complexity: O(log n) in balanced trees
// Output:
// Checking: 10
// Checking: 5
// Checking: 7
