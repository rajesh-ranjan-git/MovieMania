import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMoviesByYear from "../API/MoviesByYear";
import MovieCard from "../Components/MovieCard/MovieCard";

const MoviesByYearPage = () => {
  const dispatch = useDispatch();

  const { year } = useSelector((state) => state.movies);

  const { Search } = useSelector((state) => state.movies).moviesByYear;
  console.log("MoviesByYear", Search);

  useEffect(() => {
    const url = `https://www.omdbapi.com/?s=${year}&apikey=ee3b9d1e`;
    dispatch(getMoviesByYear(url));
  }, [year]);

  return (
    <div className="flex flex-wrap justify-evenly">
      {Search?.length > 0 &&
        Search.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
  );
};

export default MoviesByYearPage;
