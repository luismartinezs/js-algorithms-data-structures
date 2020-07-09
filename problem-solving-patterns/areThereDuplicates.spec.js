import areThereDuplicates from './areThereDuplicates.js'

describe('areThereDuplicates', () => {
  test('Checks whether there are duplicates in the arguments', () => {
    expect(areThereDuplicates(1, 2, 3)).toEqual(false)
    expect(areThereDuplicates(1, 2, 2)).toEqual(true)
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true)
    expect(areThereDuplicates()).toEqual(false)
  })
})
