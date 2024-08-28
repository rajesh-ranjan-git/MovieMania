import axios from "axios";
import { setMovies } from "../Slice/movieSlice";

const url = "https://www.omdbapi.com/?s=movies&apikey=ee3b9d1e";

const getMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.request(url);
    dispatch(setMovies(data));
    console.log("getMovies", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getMovies;
