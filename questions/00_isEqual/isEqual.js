function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`

  let obj1Keys = Object.keys(obj1)
  let obj2Keys = Object.keys(obj2)
  let equal = []
  if (obj1Keys.length === obj2Keys.length){
    for (let i = 0; i < obj1Keys.length; i++) {
      let keyValue1 = obj1[obj1Keys[i]]
      let keyValue2 = obj2[obj2Keys[i]]
      if (keyValue1 === keyValue2) {
        equal.push('true')
      }
      else {
        equal.push('false')
      }
    }
  }
  else {
    return false
  }

  if (equal.includes('false')) {
    return false
  }
  else {
    return true
  }

}

module.exports = { isEqual };
