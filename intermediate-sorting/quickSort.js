import { swap } from '../helper.js'

function quickSort (arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end)
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)
  }
  return arr
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
