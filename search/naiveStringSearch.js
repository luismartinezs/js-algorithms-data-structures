// function naiveStringSearch (long, short) {
//   let count = 0
//   let i = 0 // long index
//   let j = 0 // short index

//   while (i < long.length) {
//     if (long[i] === short[j]) {
//       if (j === short.length - 1) {
//         count++
//         j = 0
//       } else {
//         j++
//       }
//       i++
//     } else if (j > 0) {
//       j = 0
//     } else {
//       i++
//     }
//   }

//   return count
// }

function naiveStringSearch (long, short) {
  let count = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break
      }
      if (j === short.length - 1) {
        count++
      }
    }
  }

  return count
}

export default naiveStringSearch
