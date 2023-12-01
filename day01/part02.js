function x(data) {
  const lines = data.split("\n");

  const numbers = [
    { text: "one", value: 1 },
    { text: "two", value: 2 },
    { text: "three", value: 3 },
    { text: "four", value: 4 },
    { text: "five", value: 5 },
    { text: "six", value: 6 },
    { text: "seven", value: 7 },
    { text: "eight", value: 8 },
    { text: "nine", value: 9 },
  ];
  const fixString = (line) => {
    let result = line;

    numbers.forEach((number) => {
      result = result.replaceAll(
        number.text,
        `${number.text}${number.value}${number.text}`,
      );
    });

    return result.replace(/[^0-9]/g, "");
  };

  const firstAndLastDigitInLine = (line) => {
    const lineOnlyNumbers = fixString(line);

    let firstDigit = lineOnlyNumbers[0];
    let lastDigit = lineOnlyNumbers[lineOnlyNumbers.length - 1];

    const result = parseInt(`${firstDigit}${lastDigit}`);

    return result;
  };

  const values = lines.map(firstAndLastDigitInLine).reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return values;
}

module.exports = x;
