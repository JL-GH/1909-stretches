// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // YOUR CODE
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '0123456789'
  let strArr = str.split('')

  let newArr = strArr.map((numOrLetter) => {
    if (typeof numOrLetter != 'string' || typeof numOrLetter != 'number') {
      throw new Error('does not work ')
    }

  })
};

module.exports = { encryptString };
