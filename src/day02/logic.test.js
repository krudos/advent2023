const fs = require("fs");
const path = require("path");

const logic = require("./logic");
const logic2 = require("./logic2");

test("example equals response", () => {
  const example = fs.readFileSync(path.join(__dirname, "test01.txt"), "utf8");

  expect(logic(example)).toBe(8);
});

test("example equals response 2", () => {
  const example = fs.readFileSync(path.join(__dirname, "data02.txt"), "utf8");

  expect(logic(example)).toBe(2720);
});

test("example equals response 3", () => {
  const example = fs.readFileSync(path.join(__dirname, "test01.txt"), "utf8");

  expect(logic2(example)).toBe(2286);
});

test("example equals response 4", () => {
  const example = fs.readFileSync(path.join(__dirname, "data02.txt"), "utf8");

  expect(logic2(example)).toBe(71535);
});
