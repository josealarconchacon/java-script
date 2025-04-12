const max_sub_array = require("../max_sub_array");

describe("max_sub_array", () => {
  test("should return the maximum sum of a contiguous subarray", () => {
    expect(max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(max_sub_array([1])).toBe(1);
    expect(max_sub_array([-1])).toBe(-1);
    expect(max_sub_array([-2, -3, -1])).toBe(-1);
    expect(max_sub_array([5, 4, -1, 7, 8])).toBe(23);
  });

  test("should handle empty arrays", () => {
    expect(max_sub_array([])).toBe(0);
  });

  test("should handle single element arrays", () => {
    expect(max_sub_array([42])).toBe(42);
    expect(max_sub_array([-42])).toBe(-42);
  });

  test("should handle arrays with all negative numbers", () => {
    expect(max_sub_array([-1, -2, -3])).toBe(-1);
    expect(max_sub_array([-5, -4, -3])).toBe(-3);
  });
});
