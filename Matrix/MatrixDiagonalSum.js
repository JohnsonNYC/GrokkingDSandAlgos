// Given a square matrix (2D array), calculate the sum of its two diagonals.

// The two diagonals in consideration are the primary diagonal that spans from the top-left to the bottom-right
// and the secondary diagonal that spans from top-right to bottom-left. If a number is part of both diagonals
// (which occurs only for odd-sized matrices), it should be counted only once in the sum.

// Examples
// Example 1:
// Input:
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// Expected Output: 25
// Justification: Summing up the two diagonals (1+5+9+3+7), we get 25. Please note that the
// element at [1][1] = 5 is counted only once.

const matrix = [[5]];

const totalSum = (mat) => {
  let totalSum = 0;
  let numbStore = [];
  let matLength = mat.length;

  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];

    const leftPosition = i;
    const rightPosition = matLength - i - 1;

    let ltr = row[leftPosition];
    let rtl = row[rightPosition];

    if (i === matLength - 1 - i) {
      numbStore.push(rtl);
    } else {
      numbStore.push(rtl);
      numbStore.push(ltr);
    }
  }

  numbStore.forEach((n) => {
    totalSum = totalSum + n;
  });

  return totalSum;
};

console.log(totalSum(matrix));
