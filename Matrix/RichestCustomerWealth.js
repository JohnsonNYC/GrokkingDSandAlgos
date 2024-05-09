// You are given an m x n matrix accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in
// the j​​​​​​​​​​​th​​​​ bank.

// Return the wealth that the richest customer has.

// Imagine every customer has multiple bank accounts, with each account holding a certain amount of money.
// The total wealth of a customer is calculated by summing all the money across all their multiple.

// Example 1:

// Input: [[5,2,3],[0,6,7]]
// Expected Output: 13
// Justification: The total wealth of the first customer is 10 and of the second customer is 13.
// So, the output is 13 as it's the maximum among all customers.

let accounts = [
  [5, 2, 3],
  [0, 6, 7],
];

const maximumWealth = (accounts) => {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    const row = accounts[i];

    let total = row.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0);

    maxWealth = Math.max(maxWealth, total);
  }

  return maxWealth;
};

console.log(maximumWealth(accounts));
