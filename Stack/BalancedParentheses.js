// Given a string s containing (, ), [, ], {, and } characters. Determine if a given string of
// parentheses is balanced.

// A string of parentheses is considered balanced if every opening parenthesis has a corresponding
// closing parenthesis in the correct order.

// Input: String s = "{[()]}";
// Expected Output: true
// Explanation: The parentheses in this string are perfectly balanced. Every opening
// parenthesis '{', '[', '(' has a corresponding closing parenthesis '}', ']', ')' in the correct order.

const isBalanced = (s) => {
  let stack = [];

  for (const char of s) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else {
      if (!stack.length) return false;

      let top = stack.pop();

      if (char === ")" && top !== "(") return false;
      if (char === "}" && top !== "{") return false;
      if (char === "]" && top !== "[") return false;
    }
  }

  return !stack.length;
};

console.log(isBalanced("(]"));
