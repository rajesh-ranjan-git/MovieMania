import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../API/Movies";
import MovieCard from "../Components/MovieCard/MovieCard";

const Home = () => {
  const dispatch = useDispatch();

  const { Search } = useSelector((state) => state.movies).movies;
  console.log("Home", Search);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {Search?.length > 0 &&
        Search.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
  );
};

export default Home;
