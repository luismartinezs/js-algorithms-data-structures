import { pivot, quickSort } from './quickSort.js'

describe('pivot', () => {
  test('Returns sorted array given two sorted subarrays', () => {
    let arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]
    let result = [18, 4, 11, 16, 1, 14, 28, 41, 36, 37, 42, 40]
    expect(pivot(arr)).toEqual(result)
  })
})

describe('quickSort', () => {
  test('Returns sorted array', () => {})
})
