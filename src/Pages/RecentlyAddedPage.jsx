import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRecentlyAdded from "../API/RecentlyAdded";
import MovieCard from "../Components/MovieCard/MovieCard";

const RecentlyAddedPage = () => {
  const dispatch = useDispatch();

  const { recentlyAddedValue } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getRecentlyAdded());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {recentlyAddedValue?.length > 0 &&
        recentlyAddedValue.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default RecentlyAddedPage;
