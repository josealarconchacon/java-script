const two_sum = require("../two_sum.js");

describe("tow_sum", () => {
  test("should return the indexes of the two numbers that add up to the target value", () => {
    const arr = [2, 7, 11, 15];
    const target = 18;
    const expected = [1, 2];
    const result = two_sum(arr, target);
    expect(result).toEqual(expected);
  });
});
