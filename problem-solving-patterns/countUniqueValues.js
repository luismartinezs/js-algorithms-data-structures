const countUniqueValues = arr => {
  if (!arr.length) return 0

  const _arr = [...arr]
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (_arr[i] !== _arr[j]) {
      i++
      _arr[i] = _arr[j]
    }
  }
  return i + 1
}

export default countUniqueValues
