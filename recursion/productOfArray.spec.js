import productOfArray from './productOfArray.js'

describe('productOfArray', () => {
  test('Return the product of numbers of array', () => {
    expect(productOfArray([1, 2, 3])).toEqual(6)
    expect(productOfArray([1, 2, 3, 10])).toEqual(60)
  })
})
