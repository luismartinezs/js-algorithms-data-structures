// Naive approach, O(N^2)
// function same (arr, arrSq) {
//   if (arr.length !== arrSq.length) return false
//   //   return arr1.every(el => arr2.includes(el * el))
//   return arr1.reduce((acc, el) => {
//     const square = el * el
//     // check if 2nd arr contains squared value
//     if (arr2.includes(square)) {
//       // Yes it contains it, remove it from arr2
//       const index = arr2.indexOf(square)
//       arr2.splice(index, 1)
//     } else {
//       // no it doesn't contain it
//       acc = false
//     }
//     return acc
//   }, true)
// }

// Refactor, O(N)
function same (arr, arrSq) {
  if (arr.length !== arrSq.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  arr.forEach(el => {
    frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1
  })
  arrSq.forEach(el => {
    frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1
  })

  for (let key in frequencyCounter1) {
    if (!(key * key in frequencyCounter2)) return false
    if (frequencyCounter2[key * key] !== frequencyCounter1[key]) return false
  }
  return true
}

let arr1, arr2

arr1 = [1, 2, 3]
arr2 = [1, 4, 9]

console.log('true ', same(arr1, arr2)) // true

arr1 = [1, 2, 3]
arr2 = [1, 4, 10]

console.log('false ', same(arr1, arr2)) // false

arr1 = [1, 2, 3]
arr2 = [1, 4]

console.log('false ', same(arr1, arr2)) // false

arr1 = [1, 2, 3]
arr2 = [4, 1, 9]

console.log('true ', same(arr1, arr2)) // true

arr1 = [1, 2, 3]
arr2 = [1, 9]

console.log('false ', same(arr1, arr2)) // false

arr1 = [1, 2, 1]
arr2 = [4, 4, 1]

console.log('false ', same(arr1, arr2)) // false
