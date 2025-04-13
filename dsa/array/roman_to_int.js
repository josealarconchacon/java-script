function roman_to_int(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0; // Initialize total to 0
  let prevValue = 0; // Initialize prevValue to 0

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[s[i]]; // Get the value of the current Roman numeral

    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    prevValue = currentValue;
  }

  return total;
}

console.log(roman_to_int("III")); // 3
console.log(roman_to_int("IV")); // 4

module.exports = roman_to_int;
