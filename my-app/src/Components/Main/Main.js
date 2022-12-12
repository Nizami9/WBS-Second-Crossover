import "./Main.css";
import { useEffect, useState } from "react";
import Starrating from "./Starrating";
import GridLoader from "react-spinners/ClipLoader";

const Main = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/movie/550?api_key=8532add88ee9edacb53da88ab39286fc`;
  const pop =
    "/discover/movie?primary_release_year=2010&sort_by=vote_average.desc";
  const url2 = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`;

  const pic = "https://image.tmdb.org/t/p/original";
  const imdb = "https://www.imdb.com/title/";

  const getRandom = (min, max) => {
    return `https://api.themoviedb.org/3/movie/550${Math.floor(
      Math.random() * (max - min + 1) + min
    )}?api_key=8532add88ee9edacb53da88ab39286fc`;
  };

  const fetchData = () => {
    fetch(getRandom(1, 1000))
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  };

  useEffect(() => {
    setLoading(() => !false);
    console.log(movies);
  }, [movies]);

  useEffect(() => {
    setLoading((prev) => !prev);
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="movie">
          <a href={`${imdb + movies?.imdb_id}`} target="_blank">
            <h1>{movies?.original_title}</h1>
            <h2>{movies?.tagline}</h2>
            <br></br>
            <img
              className="movieImage"
              src={pic + movies?.poster_path}
              alt={`${movies?.original_title} Picture`}
            />
          </a>
          {/* <p>{movies?.backdrop_path}</p> */}
          <p>
            Genres: {movies?.genres.map((element, index) => element.name + " ")}
          </p>
          <Starrating
            stars={Math.floor(Number(movies?.vote_average))}
            total={10}
          />{" "}
          <p>({movies?.vote_count} votes)</p>
          {movies?.overview.length > 0 ? (
            <p>Description: {movies?.overview}</p>
          ) : (
            <></>
          )}
          {movies?.budget !== 0 ? <p>Budget: {movies?.budget} U$</p> : <></>}
          {movies?.revenue !== 0 ? <p>Revenue: {movies?.revenue} U$</p> : <></>}
          {/* <p>
            Production Companies:{" "}
            {movies?.production_companies.map((element) => element.name + " ")}
          </p> */}
          {movies?.production_countries.length > 0 ? (
            <p>
              Countries:{" "}
              {movies?.production_countries.map(
                (element) => element.name + " "
              )}
            </p>
          ) : (
            <></>
          )}
          <button onClick={() => fetchData()} className="randomButton">
            Gimme random Movie!
          </button>
        </div>
      ) : (
        <div>
          <GridLoader />
        </div>
      )}
    </div>
  );
};

export default Main;
