import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPopular from "../API/Popular";
import MovieCard from "../Components/MovieCard/MovieCard";

const PopularPage = () => {
  const dispatch = useDispatch();

  const { movie_results } = useSelector((state) => state.movies).popularValue;
  console.log("PopularPage", movie_results);

  useEffect(() => {
    dispatch(getPopular());
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

export default PopularPage;
