import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../API/Movies";
import MovieCard from "../Components/MovieCard/MovieCard";

const Home = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly mt-10">
      {movies?.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Home;
