// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// Splice together the outermost two numbers and sum the numbers

const fs = require("fs"),
    path = require("path")

const day = 1

fs.readFile(path.join(__dirname, `d${day}.1.input`), 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    const input = data.split('\n')
    // Get a list of numbers to add
    const list = input.map(str => {
        // Get the first number
        // Get the last number
        // Splice them together
        const numbers = str.split('').filter(value => !isNaN(value))
        return numbers[0] + numbers[numbers.length - 1]
    })
    // Add them together for answer
    console.log(list.reduce((acc, b) => Number(acc) + Number(b), 0))
});