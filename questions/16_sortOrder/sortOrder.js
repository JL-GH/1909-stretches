/*
SortOrder takes an array of objects, a key to be sorted on
and a key for the return value.
*/

function sortOrder(arrObj, sortKey, returnVal) {
  let newArr = []
  let prevVal = ''


  for (let i = 0; i < arrObj.length; i++) {
    let curObj = arrObj[i]
    if (newArr.length === 0) {
      newArr.push(curObj[returnVal])
      prevVal = curObj[sortKey]
    }

    if (prevVal > curObj[sortKey]) {
      newArr.unshift(curObj[returnVal])
      prevVal = curObj[sortKey]
    }
    else if (prevVal < curObj[sortKey]) {
      newArr.push(curObj[returnVal])
      prevVal = curObj[sortKey]
    }
  }
  return newArr
}

module.exports = { sortOrder };
