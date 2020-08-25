const minSubarrayLen = (arr, target) => {
  if (!arr.length) {
    return 0
  }

  let i = 0
  let j = 0
  let minLen = arr.length
  let sum = arr[0]

  while (j < arr.length) {
    if (sum < target) {
      j++
      sum += arr[j]
    } else {
      minLen = Math.min(minLen, j - i + 1)
      if (minLen === 1) return 1
      sum -= arr[i]
      i++
    }
  }

  return minLen === arr.length ? 0 : minLen
}

export default minSubarrayLen
