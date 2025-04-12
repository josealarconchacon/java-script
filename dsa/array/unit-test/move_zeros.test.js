const move_zeros = require("../move_zeros.js");

describe("move_zeros", () => {
  it("should move zeros to the end of the array", () => {
    const arr = [0, 1, 0, 3, 12];
    const result = move_zeros(arr);
    expect(result).toEqual([1, 3, 12, 0, 0]);
  });
  it("should move zeros to the end of the array with multiple zeros", () => {
    const arr = [0, 0, 1, 0, 3, 12];
    const result = move_zeros(arr);
    expect(result).toEqual([1, 3, 12, 0, 0, 0]);
  });
});
