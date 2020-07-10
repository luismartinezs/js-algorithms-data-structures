import power from './power.js'

describe('power', () => {
  test('Return the power of the base exponent', () => {
    expect(power(2, 0)).toEqual(1)
    expect(power(2, 2)).toEqual(4)
    expect(power(2, 4)).toEqual(16)
  })
})
