import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  moviesByYear: {},
  year: "",
  searchValue: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMoviesByYear: (state, action) => {
      state.moviesByYear = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setSearchedValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setMovies, setMoviesByYear, setYear, setSearchedValue } =
  movieSlice.actions;

export default movieSlice.reducer;
