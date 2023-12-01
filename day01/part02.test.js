const fs = require("fs");
const path = require("path");

const logic = require("./part02");

test("example equals response", () => {
  const example = fs.readFileSync(path.join(__dirname, "test02.txt"), "utf8");

  expect(logic(example)).toBe(281);
});
