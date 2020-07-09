const isSubsequence = (str1, str2) => {
  if (!str1) {
    return true
  }
  if (str1.length > str2.length) {
    return false
  }
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
