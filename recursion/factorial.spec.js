import factorial from './factorial.js'

describe('factorial', () => {
  test('Return the factorial', () => {
    expect(factorial(0)).toEqual(1)
    expect(factorial(1)).toEqual(1)
    expect(factorial(2)).toEqual(2)
    expect(factorial(4)).toEqual(24)
    expect(factorial(7)).toEqual(5040)
  })
})
