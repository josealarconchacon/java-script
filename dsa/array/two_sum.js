function two_sum(arr, target) {
  const map = new Map(); // Create a map to store the indices of the elements

  for (let i = 0; i < arr.length; i++) {
    const targetNum = target - arr[i]; // Calculate the complement of the current element
    if (map.has(targetNum)) {
      return [map.get(targetNum), i]; // If the complement exists in the map, return the indices
    }
    map.set(arr[i], i); // Store the index of the current element in the map
  }
  return []; // Return an empty array if no pair is found
}

const num_arr = [2, 7, 11, 15];
const target = 18;
console.log(two_sum(num_arr, target)); // Output: [0, 1]

module.exports = two_sum;
