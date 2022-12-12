import "./Main.css";
import { useEffect, useState } from "react";
import Starrating from "./Starrating";
import GridLoader from "react-spinners/ClipLoader";

const Main = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`;
  const pic = "https://image.tmdb.org/t/p/original";
  const imdb = "https://www.imdb.com/title/";

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      });
    setLoading((prev) => !prev);
  };

  /* const fetchPic = (blupp) => {
    fetch(pic + blupp)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(return data
      });
  } */

  useEffect(() => {
    console.log("movies ", movies);
  }, [movies]);

  useEffect(() => {
    setLoading((prev) => !prev);
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <a href={`${imdb + movies.imdb_id}`} target="_blank">
            <h3>{movies?.original_title}</h3>
            <h5>{movies?.tagline}</h5>
            <img
              className="movieImage"
              src={pic + movies.poster_path}
              alt={`${movies?.original_title} Picture`}
              Picture
            />
          </a>
          {/* <p>{movies?.backdrop_path}</p> */}
          <p>Genres: {movies?.genres.map((element) => element.name + " ")}</p>
          <p>Rating: {Math.floor(Number(movies?.vote_average))}</p>
          <Starrating
            stars={Math.floor(Number(movies?.vote_average))}
            total={10}
          />
          <p>Description: {movies?.overview}</p>
          <p>Budget: {movies?.budget} U$</p>
          <p>Revenue: {movies?.revenue} U$</p>
          {/* <p>
            Production Companies:{" "}
            {movies?.production_companies.map((element) => element.name + " ")}
          </p> */}
          <p>
            Countries:{" "}
            {movies?.production_countries.map((element) => element.name + " ")}
          </p>
          <button onClick={() => fetchData()} className="goBack">
            Gimme random Movie!
          </button>
        </div>
      ) : (
        <div>
          <GridLoader />
          <button
            onClick={() => setLoading((prev) => !prev)}
            className="loading"
          >
            setLoading
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
