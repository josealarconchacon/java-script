const mergeSortedArrays = require("../arr4.js");

describe("mergeSortedArrays (modular version)", () => {
  test("merges two sorted arrays correctly", () => {
    expect(mergeSortedArrays([0, 13, 24, 31], [24, 66, 100])).toEqual([
      0, 13, 24, 24, 31, 66, 100,
    ]);
  });

  test("returns second array if first is empty", () => {
    expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("returns first array if second is empty", () => {
    expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("merges arrays with duplicate values", () => {
    expect(mergeSortedArrays([2, 2, 2], [2, 2])).toEqual([2, 2, 2, 2, 2]);
  });

  test("merges arrays with negative values", () => {
    expect(mergeSortedArrays([-5, 0, 3], [-10, 1])).toEqual([-10, -5, 0, 1, 3]);
  });

  test("merges arrays with only one element each", () => {
    expect(mergeSortedArrays([2], [1])).toEqual([1, 2]);
  });

  test("returns empty array if both arrays are empty", () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
  });

  test("merges when all elements of one array are smaller", () => {
    expect(mergeSortedArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merges when all elements of one array are larger", () => {
    expect(mergeSortedArrays([7, 8, 9], [1, 2, 3])).toEqual([1, 2, 3, 7, 8, 9]);
  });
});
