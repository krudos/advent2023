function logic(data) {
  const lines = data
    .split(".")
    .filter(Boolean)
    .flatMap((x) => x)
    .map((x) => x.split(/(\d+)/).filter(Boolean))
    .flatMap((x) => x);

  const total = lines.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  console.log("lines", lines);
  return total;
}

module.exports = logic;
