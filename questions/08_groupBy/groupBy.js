function groupBy(arr, attr) {
  // let groupObj = {}

  // if (typeof attr === 'string') {
  //   arr.forEach((elem) => {
  //     let arr = []
  //     groupObj[elem.attr] = [elem]
  //   })
  // }
  // else if (typeof attr === 'function') {
  //   arr.forEach((elem) => {
  //     groupObj[attr()] = attr(elem)
  //   })
  // }

  // return groupObj

  //class review:
  return arr.reduce((accumulatedDict, nextItem) => {
    let accumulatedDictKey;

    if (typeof attr === 'function') accumulatedDictKey = attr(nextItem)
    else accumulatedDictKey = nextItem[attr]

    accumulatedDict[accumulatedDictKey] = !accumulatedDict[accumulatedDictKey]
      ? [nextItem]
      : accumulatedDict[accumulatedDictKey].concat([nextItem])

    return accumulatedDict
  }, {})
}

module.exports = { groupBy };
