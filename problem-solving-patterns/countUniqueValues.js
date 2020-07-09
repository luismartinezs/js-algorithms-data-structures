const countUniqueValues = arr => {
  if (!arr.length) return 0

  const _arr = [...arr]
  let i = 0
  let j = 1
  while (j < _arr.length) {
    if (_arr[i] !== _arr[j]) {
      i++
      _arr[i] = _arr[j]
    }
    j++
  }
  return i + 1
}

export default countUniqueValues
