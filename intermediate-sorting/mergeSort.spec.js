import { merge, mergeSort } from './mergeSort.js'

describe('merge', () => {
  test('Returns sorted array given two sorted subarrays', () => {
    let arr1 = [1, 3, 5]
    let arr2 = [2, 4, 10]
    let result = [1, 2, 3, 4, 5, 10]
    expect(merge(arr1, arr2)).toEqual(result)
    arr1 = []
    arr2 = [2, 4, 10]
    result = [2, 4, 10]
    expect(merge(arr1, arr2)).toEqual(result)
    arr2 = [1, 3, 5]
    arr1 = [2, 4, 10]
    result = [1, 2, 3, 4, 5, 10]
    expect(merge(arr1, arr2)).toEqual(result)
  })
})

describe('mergeSort', () => {
  test('Returns sorted array', () => {
    let arr = [5, 4, 3, 2, 1]
    let result = [1, 2, 3, 4, 5]
    expect(mergeSort(arr)).toEqual(result)
  })
})
