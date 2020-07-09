import minSubarrayLen from './minSubarrayLen.js'

describe('minSubarrayLen', () => {
  test('Finds minimal length of contiguous subarray of integers whose sum is greater than or equal to target', () => {
    expect(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2)
    expect(minSubarrayLen([2, 1, 6, 5, 4], 9)).toEqual(2)
    expect(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(
      1
    )
    expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3)
    expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5)
    expect(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2)
    expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0)
  })
})
