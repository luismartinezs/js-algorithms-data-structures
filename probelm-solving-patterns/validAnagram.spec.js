import validAnagram from './validAnagram.js'

describe('validAnagram', () => {
  test('Returns true for anagrams and false otherwise', () => {
    expect(validAnagram('', '')).toEqual(false)
  })
})
