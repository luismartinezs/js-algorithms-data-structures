function insertionSort1 (arr) {
  function insert (arr, insertee, insertor) {
    return [
      ...arr.slice(0, insertor),
      arr[insertee],
      ...arr.slice(insertor, insertee),
      ...arr.slice(insertee + 1)
    ]
  }

  let pointer

  for (let i = 1; i <= arr.length - 1; i++) {
    pointer = 0

    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] >= arr[j]) {
        pointer = j + 1
        break
      }
    }

    if (i !== pointer) {
      arr = insert(arr, i, pointer)
    }
  }

  return arr
}

function insertionSort2 (arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    const currentValue = arr[i]
    let pointer = i

    for (let j = i - 1; j >= 0 && arr[j] >= currentValue; j--) {
      arr[j + 1] = arr[j]
      pointer = j
    }

    if (pointer !== i) {
      arr[pointer] = currentValue
    }
  }

  return arr
}

export default insertionSort2
