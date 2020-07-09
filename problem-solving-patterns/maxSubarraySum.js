const maxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null
  }
  let temp = 0
  for (let i = 0; i <= n - 1; i++) {
    temp += arr[i]
  }
  let max = temp

  for (let i = 1; i <= arr.length - n; i++) {
    temp = temp - arr[i - 1] + arr[i + n - 1]
    max = Math.max(temp, max)
  }
  return max
}

export default maxSubarraySumhttps://javascript.info/
