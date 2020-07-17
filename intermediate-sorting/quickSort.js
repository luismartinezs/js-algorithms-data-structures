function quickSort () {
  return []
}

function pivot (arr, start = 0, end = arr.length - 1) {
  let pivot = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      pivot++
      ;[arr[pivot], arr[i]] = [arr[i], arr[pivot]]
    }
  }

  ;[arr[0], arr[pivot]] = [arr[pivot], arr[0]]

  return arr
}

export { pivot, quickSort }
