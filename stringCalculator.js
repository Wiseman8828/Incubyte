class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0
        let delimiter = /,|\n/
        let numberString = numbers
        let numArray = numberString.split(delimiter).map(n => Number(n))
        let negatives = numArray.filter(n => n < 0)
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`)
        }
        return numArray.reduce((sum, num) => sum + num, 0)
    }
}

module.exports = StringCalculator