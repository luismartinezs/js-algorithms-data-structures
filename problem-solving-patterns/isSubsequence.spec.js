import isSubsequence from './isSubsequence.js'

describe('isSubsequence', () => {
  test('Checks is characters from first string are contained in second string in the same order', () => {
    expect(isSubsequence('hello', 'hello world')).toEqual(true)
    expect(isSubsequence('sing', 'sting')).toEqual(true)
    expect(isSubsequence('abc', 'abracadabra')).toEqual(true)
    expect(isSubsequence('abc', 'acb')).toEqual(false)
  })
})
