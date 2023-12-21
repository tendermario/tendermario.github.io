// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// Splice together the outermost two numbers and sum the numbers

const fs = require("fs"),
    path = require("path")

const day = 1

const numberDict = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
}

const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const getNumbers = str => str.split('').filter(value => !isNaN(value))

const convertStringNumbers = str => {
    let newStr = str.split('')
    str.split('').forEach((char, i) => {
        const threeLetterWord = char + str[i+1] + str[i+2]
        const fourLetterWord = char + str[i+1] + str[i+2] + str[i+3]
        const fiveLetterWord = char + str[i+1] + str[i+2] + str[i+3] + str[i+4]

        if (numberArr.includes(threeLetterWord)) {
            newStr[i] = numberDict[threeLetterWord]
            // NOTE: Does not remove extra characters from the word, just replaces the first character in the array
            // newStr.pop(i+1)
            // newStr.pop(i+1)
        }
        if (numberArr.includes(fourLetterWord)) {
            newStr[i] = numberDict[fourLetterWord]
            // newStr.pop(i+1)
            // newStr.pop(i+1)
            // newStr.pop(i+1)
        }
        if (numberArr.includes(fiveLetterWord)) {
            newStr[i] = numberDict[fiveLetterWord]
            // newStr.pop(i+1)
            // newStr.pop(i+1)
            // newStr.pop(i+1)
            // newStr.pop(i+1)
        }
    })
    return newStr.join()
}

const TEST = false

fs.readFile(path.join(__dirname, TEST ? `d${day}.1.test` : `d${day}.1.input`), 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    data = convertStringNumbers(data)
    console.log(data)
    const input = data.split('\n')
    console.log(input)
    // Get a list of numbers to add
    const list = input.map(str => {
        // Get the first number
        // Get the last number
        // Splice them together
        const numbers = getNumbers(str)
        return numbers[0] + numbers[numbers.length - 1]
    })
    console.log(list)
    // Add them together for answer
    console.log(list.reduce((acc, b) => Number(acc) + Number(b), 0))
});

// 54235 too low