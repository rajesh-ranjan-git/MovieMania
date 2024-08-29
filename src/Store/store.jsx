import { configureStore } from "@reduxjs/toolkit";
import moviemaniaReducer from "./moviemaniaSlice";

export const appStore = configureStore({
  reducer: {
    moviemaniaData: moviemaniaReducer,
  },
});
