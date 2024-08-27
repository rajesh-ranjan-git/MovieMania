import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBoxOfficeHits from "../API/BoxOfficeHits";
import MovieCard from "../Components/MovieCard/MovieCard";

const BoxOfficeHitsPage = () => {
  const dispatch = useDispatch();

  const { boxOfficeHitsValue } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getBoxOfficeHits());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {boxOfficeHitsValue?.length > 0 &&
        boxOfficeHitsValue.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default BoxOfficeHitsPage;
