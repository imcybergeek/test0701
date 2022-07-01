import logo from "./logo.svg";
import "./App.css";

const data = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    name: "The Avengers (2012)",
  },
  {
    img: "https://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg",
    name: "The Avengers: Age of Ultron",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
    name: "Avengers: Infinity War",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    name: "Avengers: Endgame",
  },
  {
    img: "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
    name: "Iron Man",
  },
  {
    img: "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
    name: "Iron Man 2",
  },
  {
    img: "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
    name: "Iron Man 3",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((movie) => (
        <div className="Movie-tile">
          <img src={movie.img} className="App-logo" alt="logo" />
          <p>{movie.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
