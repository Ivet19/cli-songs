import askUser from "./askUser.js";

let songsNames: string[];
songsNames = [
  "Chihiro",
  "Happier than ever",
  "Birds of a feather",
  "Wildflower",
];

let userInput = askUser(
  "Introduce la posición de la canción que deseas escuchar: "
);

const message =
  Number(userInput) >= 1 && Number(userInput) <= songsNames.length
    ? `La canción en esa posición es ${songsNames[Number(userInput) - 1]}.`
    : "Error.";
console.log(message);
