const validAnagram = (str1 = '', str2 = '') => {
  if (str1.length !== str2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  str1.split('').forEach(el => {
    frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1
  })
  str2.split('').forEach(el => {
    frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1
  })

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false
  }
  return true
}

export default validAnagram
