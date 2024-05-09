// Problem 1: Running Sum of 1D Array (EASY)

// Given a one-dimensional array of integers, create a new array that represents the running sum of the original array.

// The running sum at position i in the new array is calculated as the sum of all the numbers in the original
// array from the 0th index up to the i-th index (inclusive). Formally, the resulting array should be computed
// as follows: result[i] = sum(nums[0] + nums[1] + ... + nums[i]) for each i from 0 to the length of the array minus
// one.

// Example:
// Input: [2,3,5,1,6]
// Output: [2,5,10,11,17];

const nums = [2, 3, 5, 1, 6];
const runningSums = (nums) => {
  if (!nums || !nums.length) return;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
    nums[i] = total;
  }
  return total;
  // ! Best Solution

  // Check if the array is null or has no elements and return an empty array if true
  // if (!nums || nums.length === 0) {
  //   return [];
  // }

  // Initialize an array to store the running sum
  // const result = new Array(nums.length);
  // result[0] = nums[0];

  // Loop through the array starting from index 1, adding the previous sum to the current element
  // for (let i = 1; i < nums.length; i++) {
  //   result[i] = result[i - 1] + nums[i];
  // }

  // Return the array containing the running sum
  // return result;
};

runningSums(nums);
