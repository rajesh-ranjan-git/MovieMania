import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTrending from "../API/Trending";
import MovieCard from "../Components/MovieCard/MovieCard";

const TrendingPage = () => {
  const dispatch = useDispatch();

  const { trendingValue } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTrending());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {trendingValue?.length > 0 &&
        trendingValue.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default TrendingPage;
