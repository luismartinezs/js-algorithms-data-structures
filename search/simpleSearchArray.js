function simpleSearchArray (arr, value) {
  if (!arr.length) return -1

  // linear search = check element by element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i
  }

  return -1
}
