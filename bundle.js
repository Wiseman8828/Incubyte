(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const StringCalculator = require('./stringCalculator');
const calculator = new StringCalculator()

function calculateSum() {
    const input = document.getElementById('numbers').value
    const resultElement = document.getElementById('result')
    const errorElement = document.getElementById('error')
    
    resultElement.textContent = ''
    errorElement.textContent = ''
    const normalizedInput = input.replace(/\\n/g, '\n');
    try {
        const sum = calculator.add(normalizedInput)
        resultElement.textContent = "Sum of digits: ".concat(sum)
    } catch (error) {
        console.log(error.stack)
        errorElement.textContent = error.message
    }
}

document.getElementById('calculate-btn').addEventListener('click', calculateSum)


},{"./stringCalculator":2}],2:[function(require,module,exports){
class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0
        let delimiter = /,|\n/
        let numberString = numbers

        if (numbers.startsWith('//')) {
            const delimiterEndIndex = numbers.indexOf('\n')
            const customDelimiter = numbers.substring(2, delimiterEndIndex).trim()
            delimiter = new RegExp(customDelimiter)
            numberString = numbers.substring(delimiterEndIndex + 1)
        }
        
        let numArray = numberString.split(delimiter).map(n => Number(n))
        let negatives = numArray.filter(n => n < 0)
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`)
        }
        return numArray.reduce((sum, num) => sum + num, 0)
    }
}

module.exports = StringCalculator
},{}]},{},[1]);
