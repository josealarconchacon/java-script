const roman_to_int = require("../roman_to_int.js");

describe("Roman to Integer", () => {
  it("should convert roman numeral to integer", () => {
    expect(roman_to_int("III")).toBe(3);
    expect(roman_to_int("IV")).toBe(4);
    expect(roman_to_int("IX")).toBe(9);
    expect(roman_to_int("LVIII")).toBe(58);
    expect(roman_to_int("MCMXCIV")).toBe(1994);
  });
});
