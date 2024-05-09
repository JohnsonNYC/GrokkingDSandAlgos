// Give a string s, convert it into a valid string. A string is considered valid if it does not have any
// two adjacent duplicate characters.

// To make a string valid, we will perform a duplicate removal process. A duplicate removal consists of
// choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until
// we no longer can.

// Return the final string after all such duplicate removals have been made.

// Examples
// Example 1

// Input: "abbaca"
// Expected Output: "ca"
// Description: We remove 'b' from "abbaca" to get "aaca", then remove 'a' from "aaca" to get "ca"

const removeDuplicates = (s) => {
  let stack = []; // Create an empty array to simulate a stack

  // Iterate through each character in the input string 's'
  for (let c of s) {
    // Check if the stack is not empty and the current character 'c' is equal to the top of the stack
    if (stack.length > 0 && stack[stack.length - 1] == c) {
      stack.pop(); // If there is a duplicate, remove the top element from the stack
    } else {
      stack.push(c); // If there is no duplicate, push the current character onto the stack
    }
  }

  return stack.join(""); // Convert the stack back to a string and return it
};

console.log(removeDuplicates("abbaca"));
