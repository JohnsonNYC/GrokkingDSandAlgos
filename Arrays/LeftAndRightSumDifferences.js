// Given an input array of integers nums, find an integer array, let's call it differenceArray, of the same length
// as an input integer array.

// Each element of differenceArray, i.e., differenceArray[i], should be calculated as follows: take the sum of
// all elements to the left of index i in array nums (denoted as leftSum[i]), and subtract it from the sum of
// all elements to the right of index i in array nums (denoted as rightSum[i]), taking the absolute value of
// the result. Formally:

// differenceArray[i] = | leftSum[i] - rightSum[i] |

// If there are no elements to the left/right of i, the corresponding sum should be taken as 0.

// Examples
// Input: [2, 5, 1, 6];
// Output: [12, 5, 1, 8]

// differenceArray[i] = | leftSum[i] - rightSum[i] |

const findDifferenceArray = (nums) => {
  const n = nums.length;
  const differenceArray = new Array(n).fill(0);

  let leftArray = new Array(n).fill(0);
  let rightArray = new Array(n).fill(0);

  // Traverse left to right;
  leftArray[0] = nums[0];
  for (let i = 1; i < n; i++) {
    leftArray[i] = leftArray[i - 1] + nums[i];
  }

  // Traverse right to left;
  rightArray[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightArray[i] = rightArray[i + 1] + nums[i];
  }

  // traverse either of the arrays and populate the diff array

  for (let i = 0; i < differenceArray.length; i++) {
    differenceArray[i] = Math.abs(leftArray[i] - rightArray[i]);
  }

  return differenceArray;
};

console.log(findDifferenceArray([3, 3, 3]));
