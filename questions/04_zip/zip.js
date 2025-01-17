/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2},
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  // let keys = Object.keys(objs)
  // let newObj = {}

  // keys.forEach((elem) => {
  //   newObj = obj[elem]: 0
  // })

  // for (let key in newObj)

  return objs.reduce((acc, cur) => {
    for (const key in acc) {
      if (key in cur) {
        cur[key] += acc[key]
      }
      else {
        cur[key] = acc[key]
      }
    }
    return cur
  }, {})
}

module.exports = { zip };
