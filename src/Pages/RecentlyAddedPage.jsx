import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRecentlyAdded from "../API/RecentlyAdded";
import MovieCard from "../Components/MovieCard/MovieCard";

const RecentlyAddedPage = () => {
  const dispatch = useDispatch();

  const { movie_results } = useSelector(
    (state) => state.movies
  ).recentlyAddedValue;
  console.log("RecentlyAddedPage", movie_results);

  useEffect(() => {
    dispatch(getRecentlyAdded());
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

export default RecentlyAddedPage;
