// reverse an array
function reverseArray(arr) {
  // Check if the array is empty or null
  if (!arr || arr.length === 0) {
    return [];
  }
  // Create a new array to store the reversed elements
  let reversedArr = [];
  // Iterate through the original array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    // push element to the new array
    reversedArr.push(arr[i]);
  }
  // Return the reversed array
  return reversedArr;
}
// Example usage
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// Find the maximum element in an array
function findMax(arr) {
  // Check if the array is empty or null
  if (!arr || arr.length === 0) {
    return null;
  }
  // Initialize max with the first element of the array
  let max = arr[0];
  // Iterate through the array to find the maximum element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // Return the maximum element
  return max;
}
// Example usage
const numbers = [3, 5, 7, 2, 8];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 8

module.exports = {
  reverseArray,
  findMax,
};
