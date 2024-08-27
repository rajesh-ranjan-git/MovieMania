import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBoxOfficeHits from "../API/BoxOfficeHits";
import MovieCard from "../Components/MovieCard/MovieCard";

const BoxOfficeHitsPage = () => {
  const dispatch = useDispatch();

  const { movie_results } = useSelector(
    (state) => state.movies
  ).boxOfficeHitsValue;

  console.log("BoxOfficeHitsPage", movie_results);

  useEffect(() => {
    dispatch(getBoxOfficeHits());
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

export default BoxOfficeHitsPage;
