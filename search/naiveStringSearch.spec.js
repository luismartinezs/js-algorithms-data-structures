import naiveStringSearch from './naiveStringSearch.js'

describe('naiveStringSearch', () => {
  test('Return index of array, or -1 if not found', () => {
    expect(naiveStringSearch('wowomgzomg', 'omg')).toEqual(2)
    expect(naiveStringSearch('wowomgzomg', 'owo')).toEqual(1)
    expect(naiveStringSearch('wowomgzomg', 'lol')).toEqual(0)
    expect(naiveStringSearch('wowoommgzomg', 'omg')).toEqual(1)
  })
})
