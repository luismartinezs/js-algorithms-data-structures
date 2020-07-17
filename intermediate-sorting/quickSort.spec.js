import { pivot, quickSort } from './quickSort.js'

describe('pivot', () => {
  test('Returns sorted array given two sorted subarrays', () => {
    let arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]
    expect(pivot(arr)).toEqual(6)
    arr = [100, 28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]
    expect(pivot(arr)).toEqual(12)
    arr = [1, 28, 41, 4, 11, 16, 2, 40, 14, 36, 37, 42, 18]
    expect(pivot(arr)).toEqual(0)
  })
})

describe('quickSort', () => {
  test('Returns sorted array', () => {})
})
