import askUser from "./askUser.js";

let songsNames: string[];
songsNames = [
  "Chihiro",
  "Happier than ever",
  "Birds of a feather",
  "Wildflower",
];

let song: string;
song = askUser("Introduce la posición de la canción que deseas escuchar: ");

const position = song !== null ? parseInt(song, 10) : NaN;

position >= 1 && position <= songsNames.length
  ? console.log(`La canción en esa posición es ${songsNames[+song - 1]}.`)
  : console.log("Error: no existe ninguna canción en esa posición.");
