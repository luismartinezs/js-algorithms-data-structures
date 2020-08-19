// memoized fibonacci
// O(n)
// Can give exceed call stack size (10000)
function memoFib (n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) {
    return memo[n]
  }
  // if (n <= 2) return 1
  const res = memoFib(n - 1, memo) + memoFib(n - 2, memo)
  memo[n] = res
  return res
}

const cache = [undefined, 1, 1]

memoFib(100, cache)

console.log(cache[10])

// Tabulated fibonacci
// O(n)
// Better space complexity than memoized version
// Cannot generate call stack size error
function tabFib (n) {
  if (n <= 2) {
    return 1
  }

  const fibNums = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums[n]
}

console.log(tabFib(10))
