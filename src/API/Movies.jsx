import axios from "axios";
import { setMovies } from "../Slice/movieSlice";

const options = {
  method: "GET",
  url: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "4cf4ad1e3amsh9a90ce59e6791c5p1d5b6ajsn6cdbcad22a5f",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const getMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.request(options);
    dispatch(setMovies(data));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getMovies;
