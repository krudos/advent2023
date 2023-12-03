const readFile = require("../readFile");

function formatData(data) {
  const games = data.split("\n").map((line) => {
    const info = line.split(":");
    const data = info[1]
      .split(";")
      .map((pair) => pair.trim())
      .map((game) =>
        game.split(",").reduce((acc, curr) => {
          const [value, key] = curr.trim().split(" ");
          acc[key] = value;
          return acc;
        }, {}),
      );

    const gameId = info[0].trim().split(" ")[1];

    return { gameId, data };
  });

  return games;
}

const getMinPower = (games) => {
  const x = games.map((g) => minOfGamePower(g.data));

  return x;
};

const minOfGamePower = (plays) => {
  const x = { red: 0, green: 0, blue: 0 };

  plays.forEach((play) =>
    Object.keys(play).forEach((key) => {
      if (x[key] < parseInt(play[key])) {
        x[key] = parseInt(play[key]);
      }
    }),
  );

  const total = Object.keys(x).reduce((acc, curr) => {
    return acc * x[curr];
  }, 1);

  return total;
};

function logic(data) {
  //12 red cubes, 13 green cubes, and 14 blue cubes

  const games = formatData(data);

  const responses = getMinPower(games);

  const response = responses.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);

  return response;
}

const firstArg = process.argv[2];

if (firstArg) {
  const data = readFile(firstArg);

  const result = logic(data);

  console.log(firstArg, "answer", result);
}

module.exports = logic;
