import recursiveRange from './recursiveRange.js'

describe('recursiveRange', () => {
  test('Return sum of all numbers from 0 to n', () => {
    expect(recursiveRange(6)).toEqual(21)
    expect(recursiveRange(10)).toEqual(55)
  })
})
