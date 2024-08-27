import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPopular from "../API/Popular";
import MovieCard from "../Components/MovieCard/MovieCard";

const PopularPage = () => {
  const dispatch = useDispatch();

  const { popularValue } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {popularValue?.length > 0 &&
        popularValue.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default PopularPage;
