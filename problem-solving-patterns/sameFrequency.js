const sameFrequency = (n, m) => {
  let frequencyCounter = {}

  String(n)
    .split('')
    .forEach(char => {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    })

  for (let char of String(m)) {
    if (!frequencyCounter[char]) return false
    frequencyCounter[char]--
  }

  return true
}

export default sameFrequency
