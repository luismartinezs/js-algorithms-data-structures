import zeroSum from './zeroSum.js'

describe('zeroSum', () => {
  test('Returns the first two values whose sum is zero in a sorted array', () => {
    expect(zeroSum([-2, -1, 0, 1, 2])).toEqual([-2, 2])
    expect(zeroSum([-2, 0, 1, 3])).toEqual(undefined)
    expect(zeroSum([1, 2, 3])).toEqual(undefined)
  })
})
