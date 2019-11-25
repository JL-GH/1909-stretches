// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and"
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

class Next {
  constructor(someArr) {
    const arrLength = someArr.length
    let curIdx = 0

    this.arr = someArr

    this.next = () => {
      if (curIdx < arrLength) {
        console.log(this.arr[curIdx])
        curIdx ++
      }
    }
  }
}

// no export statement required
