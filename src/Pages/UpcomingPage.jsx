import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUpcoming from "../API/Upcoming";
import MovieCard from "../Components/MovieCard/MovieCard";

const Home = () => {
  const dispatch = useDispatch();

  const { upcomingValue } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getUpcoming());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {upcomingValue?.length > 0 &&
        upcomingValue.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default Home;
