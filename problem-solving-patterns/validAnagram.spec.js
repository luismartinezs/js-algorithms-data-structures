import validAnagram from './validAnagram.js'

describe('validAnagram', () => {
  test('Returns true for anagrams and false otherwise', () => {
    expect(validAnagram('', '')).toEqual(true)
    expect(validAnagram('aaz', 'zza')).toEqual(false)
    expect(validAnagram('rat', 'car')).toEqual(false)
    expect(validAnagram('awesome', 'awesom')).toEqual(false)
    expect(validAnagram('qwerty', 'qeywrt')).toEqual(true)
    expect(validAnagram('texttwisttime', 'timetwisttext')).toEqual(true)
    expect(validAnagram('anagram', 'nagaram')).toEqual(true)
  })
})
