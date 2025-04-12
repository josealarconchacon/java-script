function contains_duplicate(nums) {
  if (nums.length === 0) return false;

  const numSet = new Set(); // Create a set to store unique numbers

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the number is already in the set
    if (numSet.has(nums[i])) {
      // If it is, we found a duplicate
      return true;
    }
    numSet.add(nums[i]);
  }
  return false;
}

const arr = [1, 2, 3, 4, 5, 1];
console.log(contains_duplicate(arr)); // Output: true

module.exports = contains_duplicate;
