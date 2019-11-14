function cache(func) {
  if (typeof func !== 'function') {
    throw new Error('Input must be a function.')
  }
  const memo = {}

  return function chacedAdder(...num) { // the spread operator is putting the arguments in an array
    if (memo[num] !== undefined) {
      return memo[num]
    }
    else {
      memo[num] = func(...num) // here the spread operator is breaking out the values from the array into the callback function
      return memo[num]
    }
  }
}

module.exports = { cache };
