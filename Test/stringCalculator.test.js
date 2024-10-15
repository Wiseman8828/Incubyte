// const { add } = require('./stringCalculator');

test('adds "1,2" to equal 3', () => {
  expect(add("1,2")).toBe(3)
});

test('adds "1" to equal 1', () => {
  expect(add("1")).toBe(1)
});

test('adds "" to equal 0', () => {
  expect(add("")).toBe(0)
});
