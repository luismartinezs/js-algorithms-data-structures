const findLongestSubstring = str => {
  if (str.length < 2) return str.length

  let i = 0
  let frequencyCount = {
    [str[0]]: 1
  }
  let maxLength = 0
  let currentLength = 1

  for (let j = 1; j < str.length; j++) {
    currentLength++

    frequencyCount[str[j]] = (frequencyCount[str[j]] || 0) + 1

    if (frequencyCount[str[j]] === 2) {
      frequencyCount[str[j]]--
      const lastIndex = str.lastIndexOf(str[j], j - 1)
      i = i > lastIndex ? i : lastIndex
      currentLength = j - i
    }

    maxLength = Math.max(maxLength, currentLength)
  }

  return maxLength
}

export default findLongestSubstring
