const fs = require("fs");
const path = require("path");

const readFile = (fileName) => {
  const example = fs.readFileSync(path.join(__dirname, fileName), "utf8");

  return example;
};

module.exports = readFile;
