import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Slice/movieSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
