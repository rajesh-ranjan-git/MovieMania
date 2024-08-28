import axios from "axios";
import { setMoviesByYear } from "../Slice/movieSlice";

const getMoviesByYear = (url) => async (dispatch) => {
  try {
    const { data } = await axios.request(url);
    dispatch(setMoviesByYear(data));
    console.log("getMoviesByYear", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getMoviesByYear;
