function binarySearch (sortedArr, value) {
  if (!sortedArr.length) return -1

  let left = 0
  let right = sortedArr.length - 1

  if (sortedArr[left] > value || sortedArr[right] < value) {
    return -1
  }

  const getMid = (i, j) => Math.floor((i + j) / 2)

  while (left <= right) {
    let mid = getMid(left, right)
    if (sortedArr[mid] === value) {
      return mid
    }
    if (sortedArr[mid] < value) {
      left = mid + 1
    }
    if (sortedArr[mid] > value) {
      right = mid - 1
    }
  }

  return -1
}

export default binarySearch
