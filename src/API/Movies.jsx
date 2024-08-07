import axios from "axios";
import React from "react";
import { setMovies } from "../Slice/movieSlice";

const getMovies = () => async (dispatch) => {
  const url = "https://freetestapi.com/api/v1/movies";
  try {
    const { data } = await axios.get(url);
    dispatch(setMovies(data));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getMovies;
