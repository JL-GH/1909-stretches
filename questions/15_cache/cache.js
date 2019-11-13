function cache(func) {
  let count = 0
  if (typeof func !== 'function') {
    throw new Error('Input must be a function.')
  }

  if(count === 0) {
    count ++
    return func
  }
  else {
    return ''
  }
}

module.exports = { cache };
