// Check is array is empty
function isArrayEmpty(arr) {
  return !arr || arr.length === 0;
}

// Get array elements at a specific index is exists, otherwise return undefined
function getNextItemInArray(arr, index) {
  return index < arr.length ? arr[index] : undefined;
}

function shouldTakeItemFromArr1(arr1Item, arr2Item) {
  return !arr2Item || arr1Item < arr2Item;
}

// Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  // Check when one or both arrays are empty
  if (isArrayEmpty(arr1)) return arr2;
  if (isArrayEmpty(arr2)) return arr1;

  const finalArray = []; // Array to store merged values
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Get the first items from each array
  let arr1Item = getNextItemInArray(arr1, i);
  let arr2Item = getNextItemInArray(arr2, j);

  // oop until both arrays are fully traversed
  while (arr1Item !== undefined || arr2Item !== undefined) {
    // Decide which array has the smaller current item
    if (shouldTakeItemFromArr1(arr1Item, arr2Item)) {
      finalArray.push(arr1Item); // Push arr1's item to result
      i++; // Move to next item in arr1
      arr1Item = getNextItemInArray(arr1, i);
    } else {
      finalArray.push(arr2Item); // Push arr2's item to result
      j++; // Move to next item in arr2
      arr2Item = getNextItemInArray(arr2, j);
    }
  }

  return finalArray; // Return the final merged sorted array
}

console.log(mergeSortedArrays([0, 13, 24, 31], [24, 66, 100]));

module.exports = mergeSortedArrays;
