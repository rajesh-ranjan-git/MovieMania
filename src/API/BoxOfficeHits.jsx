import axios from "axios";
import { setBoxOfficeHits } from "../Slice/movieSlice";

const options = {
  method: "GET",
  url: "https://movies-tv-shows-database.p.rapidapi.com/",
  params: { page: "1" },
  headers: {
    "x-rapidapi-key": "4cf4ad1e3amsh9a90ce59e6791c5p1d5b6ajsn6cdbcad22a5f",
    "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
    Type: "get-boxoffice-movies",
  },
};

const getBoxOfficeHits = () => async (dispatch) => {
  try {
    const { data } = await axios.request(options);
    dispatch(setBoxOfficeHits(data));
    console.log("getBoxOfficeHits", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getBoxOfficeHits;
