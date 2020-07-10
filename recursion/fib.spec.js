import fib from './fib.js'

describe('fib', () => {
  test('Return nth number of Fibonacci series', () => {
    expect(fib(0)).toEqual(0)
    expect(fib(4)).toEqual(3)
    expect(fib(10)).toEqual(55)
    expect(fib(28)).toEqual(317811)
    expect(fib(35)).toEqual(9227465)
  })
})
