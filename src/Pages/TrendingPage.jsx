import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTrending from "../API/Trending";
import MovieCard from "../Components/MovieCard/MovieCard";

const TrendingPage = () => {
  const dispatch = useDispatch();

  const { movie_results } = useSelector((state) => state.movies).trendingValue;
  console.log("TrendingPage", movie_results);

  useEffect(() => {
    dispatch(getTrending());
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

export default TrendingPage;
