function max_sub_array(nums) {
  if (nums.length === 0) return 0;
  let max_sum = -Infinity; // Initialize to negative infinity
  let current_sum = 0; // Initialize to 0
  for (let i = 0; i < nums.length; i++) {
    current_sum += nums[i]; // Add the current element to the current sum
    max_sum = Math.max(max_sum, current_sum); // Update max_sum if current_sum is greater
    if (current_sum < 0) {
      current_sum = 0; // Reset current_sum if it becomes negative
    }
  }
  return max_sum; // Return the maximum sum found
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(max_sub_array(nums)); // Output: 6

module.exports = max_sub_array;
