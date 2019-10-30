const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('NaN', 1)).toThrow();

    expect(() => multiply('@', 2)).toThrow();
  });

  test('it returns the product of two numbers', () => {

    // test the type of the returned value
    expect(typeof multiply(5,5)).toBe('number');

    // test that the returned value is correct
    expect(multiply(10,10)).toBe(100);

    // test some other values
    expect(multiply(12,12)).toBe(144);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    let num1 = Math.random()
    let num2 = Math.random()

    expect(multiply(num1, num2)).toBe(num1 * num2)
  });
});
