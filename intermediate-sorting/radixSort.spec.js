import { getDigit, digitCount, mostDigits, radixSort } from './radixSort.js'

describe('getDigit', () => {
  test('Returns digit in position', () => {
    expect(getDigit(12345, 0)).toEqual(5)
    expect(getDigit(12345, 1)).toEqual(4)
    expect(getDigit(12345, 2)).toEqual(3)
    expect(getDigit(12345, 3)).toEqual(2)
    expect(getDigit(12345, 4)).toEqual(1)
    expect(getDigit(12345, 5)).toEqual(0)
  })
})

describe('digitCount', () => {
  test('Returns digit count of number', () => {
    expect(digitCount(2)).toEqual(1)
    expect(digitCount(23)).toEqual(2)
    expect(digitCount(21234)).toEqual(5)
  })
})

describe('mostDigits', () => {
  test('Returns digit count of number with most digits of array', () => {
    expect(mostDigits([2, 2, 3, 1])).toEqual(1)
    expect(mostDigits([232, 3, 4])).toEqual(3)
    expect(mostDigits([21234, 234, 21, 1, 43567])).toEqual(5)
  })
})

describe('radixSort', () => {
  test('Returns sorted array of numbers', () => {
    let numbers = [1, 23, 4, 10, 56, 97, 77, 32, 42, 2, 145]
    let result = [1, 2, 4, 10, 23, 32, 42, 56, 77, 97, 145]
    expect(radixSort(numbers)).toEqual(result)
    numbers = [4, 1, 90, 10]
    result = [1, 4, 10, 90]
    expect(radixSort(numbers)).toEqual(result)
  })
})
