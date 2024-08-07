import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../API/Movies";

const Home = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  console.log(movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <h1>This is Home component.</h1>
    </div>
  );
};

export default Home;
