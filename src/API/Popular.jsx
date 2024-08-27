import axios from "axios";
import { setPopular } from "../Slice/popularSlice";

const options = {
  method: "GET",
  url: "https://movies-tv-shows-database.p.rapidapi.com/",
  params: {
    year: "2020",
    page: "1",
  },
  headers: {
    "x-rapidapi-key": "4cf4ad1e3amsh9a90ce59e6791c5p1d5b6ajsn6cdbcad22a5f",
    "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
    Type: "get-popular-movies",
  },
};

const getPopular = () => async (dispatch) => {
  try {
    const { data } = await axios.request(options);
    dispatch(setPopular(data));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getPopular;
