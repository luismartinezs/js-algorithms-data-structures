import findLongestSubstring from './findLongestSubstring.js'

describe('findLongestSubstring', () => {
  test('Finds length of longest substring with all distinct characters', () => {
    expect(findLongestSubstring('')).toEqual(0)
    expect(findLongestSubstring('rithmschool')).toEqual(7)
    expect(findLongestSubstring('thisisawesome')).toEqual(6)
    expect(findLongestSubstring('thecatinthehat')).toEqual(7)
    expect(findLongestSubstring('bbbbbb')).toEqual(1)
    expect(findLongestSubstring('longestsubstring')).toEqual(8)
    expect(findLongestSubstring('thisishowwedoit')).toEqual(6)
  })
})
