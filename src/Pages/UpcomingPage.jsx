import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUpcoming from "../API/Upcoming";
import MovieCard from "../Components/MovieCard/MovieCard";

const Upcoming = () => {
  const dispatch = useDispatch();

  const { movie_results } = useSelector((state) => state.movies).upcomingValue;
  console.log("Upcoming", movie_results);

  useEffect(() => {
    dispatch(getUpcoming());
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

export default Upcoming;
