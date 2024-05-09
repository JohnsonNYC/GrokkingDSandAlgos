// Problem Statement
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: false

// Examples 2:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation: '1' is repeating

const nums = [1, 2, 3, 1];
const containsDuplicate = (nums) => {
  if (!nums || !nums.length) return false;

  let uniqueSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (uniqueSet.has(nums[i])) {
      return true;
    }
    uniqueSet.add(nums[i]);
  }
  return false;
};

console.log(containsDuplicate(nums));
