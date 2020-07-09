import sameFrequency from './sameFrequency.js'

describe('sameFrequency', () => {
  test('Find out if two positive integers have the same frequency of digits', () => {
    expect(sameFrequency(182, 281)).toEqual(true)
    expect(sameFrequency(34, 14)).toEqual(false)
    expect(sameFrequency(3589578, 5879385)).toEqual(true)
    expect(sameFrequency(22, 222)).toEqual(false)
  })
})
