// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// Splice together the outermost two numbers and sum the numbers

const fs = require("fs"),
    path = require("path")

const day = n // Replace me

fs.readFile(path.join(__dirname, `d${day}.1.input`), 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    const input = data.split('\n')
    console.log(input);
    // Start here
});