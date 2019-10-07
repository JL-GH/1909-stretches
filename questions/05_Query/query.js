const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

function query(arr, obj) {
  let keys = Object.keys(obj)
  let result = []
  arr.forEach((elem) => {
    for (let i = 0; i < keys.length; i ++) {
      if (elem[keys[i]] === obj.keys[i]) {
        result.push(elem)
      }
    }
  })
  return result
}

module.exports = { query, items };
