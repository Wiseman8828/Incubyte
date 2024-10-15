const StringCalculator = require('../stringCalculator');

describe("String Calculator", function () {
    let calculator

    beforeEach(function () {
        calculator = new StringCalculator()
    })

    test('adds "1,2" to equal 3', () => {
        expect(calculator.add("1,2")).toBe(3)
    });

    test('adds "1" to equal 1', () => {
        expect(calculator.add("1")).toBe(1)
    });

    test('adds "" to equal 0', () => {
        expect(calculator.add("")).toBe(0)
    });
})