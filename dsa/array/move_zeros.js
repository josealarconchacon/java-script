function move_zeros(nums) {
  let count = 0; // Count of non-zero elements
  // Traverse the array from left to right
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero
      // Swap the current element, count, with the element at index i, moving all zero elements to the end
      nums[count] = nums[i];
      count++;
    }
  }
  // Fill the remaining positions with zeros
  while (count < nums.length) {
    nums[count] = 0; // Fill the remaining positions with zeros
    count++;
  }
  return nums;
}

const arr = [0, 1, 0, 3, 12];
console.log(move_zeros(arr)); // Output: [1, 3, 12, 0, 0]

module.exports = move_zeros;
