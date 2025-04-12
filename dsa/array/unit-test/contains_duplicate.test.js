const contains_duplicate = require("../contains_duplicate.js");

describe("contains_duplicate", () => {
  it("should return true if the array contains duplicate elements", () => {
    expect(contains_duplicate([1, 2, 3, 4, 5, 1])).toBe(true);
  });

  it("should return false if the array does not contain duplicate elements", () => {
    expect(contains_duplicate([1, 2, 3, 4, 5])).toBe(false);
  });

  it("should return false for an empty array", () => {
    expect(contains_duplicate([])).toBe(false);
  });
});
