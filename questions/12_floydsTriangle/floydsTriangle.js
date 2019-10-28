// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
  let result = ''
  let count = 0
  for (let i = 1; i <= n ; i++) {
    for (let j = 1; j <= i; j++) {
      count ++
      result += count
    }
    if (count )
    result += `\n`
  }
  return result.slice(0,-1)
};

module.exports = { floydsTriangle };
