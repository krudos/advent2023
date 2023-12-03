const fs = require("fs");
const path = require("path");

const logic = require("./logic");

test("day03 example data", () => {
  const input = fs.readFileSync(path.join(__dirname, "test.input.txt"), "utf8");

  expect(logic(input)).toBe(4361);
});
