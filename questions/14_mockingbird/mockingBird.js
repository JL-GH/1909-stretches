const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let arr = []
  for (let i = 1 ; i <= n; i++) {
    arr.push(func())
  }
  return arr
};

module.exports = { repeater };
