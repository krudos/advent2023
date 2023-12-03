const readFile = require("../readFile");

function x(data) {
  const lines = data.split("\n");

  const firstAndLastDigitInLine = (line) => {
    const lineOnlyNumbers = line.replace(/[^0-9]/g, "");

    const chars = lineOnlyNumbers.split("");
    let firstDigit = chars[0];
    let lastDigit = chars[chars.length - 1];

    const result = parseInt(`${firstDigit}${lastDigit}`);

    return result;
  };

  const values = lines.map(firstAndLastDigitInLine).reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return values;
}

const firstArg = process.argv[2];

// Log the first argument to the console

if (firstArg) {
  console.log(firstArg);
  const data = readFile(firstArg);

  const result = x(data);

  console.log("answer", result);
}

module.exports = x;
