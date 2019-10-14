// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let arr = [...str2]
  for (let i = 0; i < str1.length; i++) {
    let idx = str1[i]
    if (arr.includes(idx)) {
      let find = arr.indexOf(idx)
      arr.splice(find)
    }
  }

  if (arr.length === 0) {
    return true
  }
  else {
    return false
  }

};

module.exports = { checkAnagrams };
