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

    test("should allow \\n in between the input number string", function() {
        expect(calculator.add("1\n2,3")).toBe(6)
    })
    
    test("should not allow a single negative number and show it in the error message", function() {
        expect(() => calculator.add("-1,2,3")).toThrow('negative numbers not allowed: -1')
    })

    test("should not allow multiple negative numbers and show all of them in the error message", function() {
        expect(() => calculator.add("-1,2,-3")).toThrow('negative numbers not allowed: -1, -3')
    })


})