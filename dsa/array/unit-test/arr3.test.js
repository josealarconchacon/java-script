const { reverseArray, findMax } = require("../arr3");

describe("reverseArray", () => {
  test("reverses a normal array", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("returns empty array when input is empty", () => {
    expect(reverseArray([])).toEqual([]);
  });

  test("returns empty array when input is null", () => {
    expect(reverseArray(null)).toEqual([]);
  });

  test("handles array with one element", () => {
    expect(reverseArray([42])).toEqual([42]);
  });
});

describe("findMax", () => {
  test("it should find max item in the array", () => {
    expect(findMax([3, 5, 7, 2, 8])).toBe(8);
  });

  test("it should find max item in the array with negative values", () => {
    expect(findMax([-3, -5, -7, -2, -8])).toBe(-2);
  });

  test("returns null for empty array", () => {
    expect(findMax([])).toBeNull();
  });

  test("returns null for null input", () => {
    expect(findMax(null)).toBeNull();
  });

  test("works with one-element array", () => {
    expect(findMax([7])).toBe(7);
  });
});
