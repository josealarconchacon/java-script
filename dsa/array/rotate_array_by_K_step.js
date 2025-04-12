function rotate_array_by_K_step(nums, k) {
  const n = nums.length;
  k = k % n; // Handle cases where k is greater than n
  reverse(nums, 0, n - 1); // Reverse the entire array
  reverse(nums, 0, k - 1); // Reverse the first k elements
  reverse(nums, k, n - 1); // Reverse the remaining elements
  return nums;
}

// Helper function to reverse a portion of the array
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start]; // Store the start element
    arr[start] = arr[end]; // Swap the elements
    arr[end] = temp; // Assign the stored element to the end position
    start++;
    end--;
  }
}
// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotate_array_by_K_step(nums, k);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]

module.exports = rotate_array_by_K_step;
