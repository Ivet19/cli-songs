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

switch (song) {
  case "1":
    console.log(songsNames[0]);
    break;
  case "2":
    console.log(songsNames[1]);
    break;
  case "3":
    console.log(songsNames[2]);
    break;
  case "4":
    console.log(songsNames[3]);
    break;
  default:
    console.log("No existe ninguna canción en esa posición.");
}
