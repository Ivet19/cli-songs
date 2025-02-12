import askUser from "./askUser.js";

let songsNames = [
  "Chihiro",
  "Happier than ever",
  "Birds of a feather",
  "Wildflower",
];

const songPosition = askUser(
  "Introduce la posición de la canción que deseas escuchar: "
);

const message =
  Number(songPosition) >= 1 && Number(songPosition) <= songsNames.length
    ? `La canción en esa posición es ${songsNames[Number(songPosition) - 1]}.`
    : `Error: el valor introducido no es válido. El número de canciones disponibles es ${songsNames.length}`;
console.log(message);
