// Given a string of English lowercase and uppercase letters, make the string "good" by removing two adjacent characters that are the same but in different
// cases.

// Continue to do this until there are no more adjacent characters of the same letter but in different cases. An empty string is also considered "good".

// Example 1:
// Input: "AaBbCcDdEeff"
// Output: "ff"
// Explanation: In the first step, "AaBbCcDdEeff" becomes "BbcCDdEeff" because 'A' and 'a' are the same letter, but one is uppercase and the other is
// lowercase. Then we remove "Bb", and then "cC", "dD", and "Ee". In the end we are left with "ff" which we can't remove - although both
// characters are the same but with the same case.

// Example 2:
// Input: "abBA"
// Output: ""
// Explanation: In the first step, "abBA" becomes "aA" because 'b' and 'B' are the same letter, but one is uppercase and the other is lowercase.
// Then "aA" becomes "" for the same reason. The final string is empty, which is good.

// Example 3
// Input: "s"
// Output: "s"
// Explanation: The string "s" is already good because it only contains one character.

const makeGood = (s) => {
  let stack = [];

  for (let char of s) {
    const peekEl = stack[stack.length - 1];
    const match =
      peekEl &&
      ((char === char.toUpperCase() && char.toLowerCase() === peekEl) ||
        (char === char.toLowerCase() && char.toUpperCase() === peekEl));

    if (match) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log(makeGood("AaBbCcDdEeff"));
console.log(makeGood("abBA"));
console.log(makeGood("s"));
