import bubble from './bubble.js'

describe('bubble', () => {
  test('Sorts array', () => {
    let arr = [3, 2, 1]
    expect(bubble(arr)).toEqual([1, 2, 3])
    arr = [2, 34, 55, 6, 2, 100, 99]
    expect(bubble(arr)).toEqual([2, 2, 6, 34, 55, 99, 100])
    arr = [8, 1, 2, 3, 4, 5, 6, 7]
    expect(bubble(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
