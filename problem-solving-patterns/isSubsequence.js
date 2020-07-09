const isSubsequence = (str1, str2) => {
  let j = 0
  for (let letter of str1) {
    while (letter !== str2[j]) {
      j++
      if (j === str2.length) return false
    }
  }
  return true
}

export default isSubsequence
