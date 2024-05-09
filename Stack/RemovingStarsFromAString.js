const removeStars = (s) => {
  let stack = [];

  for (let c of s) {
    if (c == "*") {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};

console.log(removeStars("abc*de*f"));
console.log(removeStars("a*b*c*d"));
console.log(removeStars("abcd"));
