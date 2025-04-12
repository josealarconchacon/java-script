const rotate_array_by_K_step = require("../rotate_array_by_K_step");

describe("rotate_array_by_K_step", () => {
  it("should rotate array by K step", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    const expected = [5, 6, 7, 1, 2, 3, 4];
    const result = rotate_array_by_K_step(nums, k);
    expect(result).toEqual(expected);
  });
});
