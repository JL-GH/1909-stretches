function groupBy(arr, attr) {
  let groupObj = {}

  if (typeof attr === 'string') {
    arr.forEach((elem) => {
      let arr = []
      groupObj[elem.attr] = [elem]
    })
  }
  else if (typeof attr === 'function') {
    arr.forEach((elem) => {
      groupObj[attr()] = attr(elem)
    })
  }

  return groupObj
}

module.exports = { groupBy };
