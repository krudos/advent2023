const fs = require("fs");
const path = require("path");

const logic = require("./part01");

test("example equals response", () => {
  const example = fs.readFileSync(path.join(__dirname, "test01.txt"), "utf8");

  expect(logic(example)).toBe(142);
});
