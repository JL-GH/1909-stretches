function times(x) {
  if (typeof x !== 'number') throw 'Numbers only!'
  return function(y) {
    return x*y
  }
}

module.exports = { times };
