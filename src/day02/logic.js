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

const validate = (max, games) => {
  const x = games.map((g) => {
    let valid = true;

    const checkGame = validateSingleGame(max, g.data);

    if (!checkGame) {
      valid = false;
    }

    return valid;
  });

  const ids = games
    .map((g, index) => {
      const xx = x[index];

      if (xx) {
        return g.gameId;
      }

      return false;
    })
    .filter((x) => x);

  return ids;
};

const validateSingleGame = (max, games) => {
  let valid = true;

  const maxItems = Object.keys(max).reduce((acc, curr) => {
    return acc + max[curr];
  }, 0);

  games.forEach((game) => {
    const sumValues = Object.keys(game).reduce((acc, curr) => {
      if (game[curr] > max[curr]) {
        valid = false;
      }

      return acc + parseInt(game[curr]);
    }, 0);

    if (sumValues > maxItems) {
      valid = false;
    }
  });

  return valid;
};

function logic(data) {
  //12 red cubes, 13 green cubes, and 14 blue cubes

  const max = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const games = formatData(data);

  const responses = validate(max, games);

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
