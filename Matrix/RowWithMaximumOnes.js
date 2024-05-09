// Given a binary matrix that has dimensions , consisting of ones and zeros, determine the row that contains the
// highest number of ones and return two values: the zero-based index of this row and the actual count of ones it
// possesses.

// If there is a tie, i.e., multiple rows contain the same maximum number of ones, we must select the row with
// the lowest index.

// Examples
// Example 1:

// Input: [[1, 0], [1, 1], [0, 1]]
// Expected Output: [1, 2]
// Justification: The second row [1, 1] contains the most ones, so the output is [1, 2].

const mat = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 0],
];

const findMaxOneRow = (mat) => {
  let maxOneIdx = 0;
  let maxOnesCount = 0;

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    let onesCount = row.reduce((acc, curr) => acc + curr, 0);

    if (onesCount > maxOnesCount) {
      maxOnesCount = onesCount;
      maxOneIdx = i;
    }
  }

  return [maxOneIdx, maxOnesCount];
};

console.log(findMaxOneRow(mat));
