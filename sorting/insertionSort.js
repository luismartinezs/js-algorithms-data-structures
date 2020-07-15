function insertionSort (arr) {
  let pointer

  for (let i = 1; i <= arr.length - 1; i++) {
    pointer = 0

    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] >= arr[j]) {
        pointer = j + 1
        break
      }
    }

    arr = [
      ...arr.slice(0, pointer),
      arr[i],
      ...arr.slice(pointer, i),
      ...arr.slice(i + 1)
    ]
  }

  return arr
}

export default insertionSort
