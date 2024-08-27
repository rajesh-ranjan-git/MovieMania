import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../API/Movies";
import MovieCard from "../Components/MovieCard/MovieCard";

const Home = () => {
  const dispatch = useDispatch();

  const { movie_results } = useSelector((state) => state.movies).movies;
  console.log("Home", movie_results);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {movie_results?.length > 0 &&
        movie_results.map((movie) => (
          <MovieCard key={movie.imdb_id} movie={movie} />
        ))}
    </div>
  );
};

export default Home;
