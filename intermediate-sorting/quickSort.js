import { swap } from '../helper.js'

function quickSort () {
  return []
}

function pivot (arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }

  swap(arr, start, swapIndex)

  return swapIndex
}

export { pivot, quickSort }
