import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  boxOfficeHitsValue: {},
  popularValue: {},
  recentlyAddedValue: {},
  trendingValue: {},
  upcomingValue: {},
  searchValue: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setBoxOfficeHits: (state, action) => {
      state.boxOfficeHitsValue = action.payload;
    },
    setPopular: (state, action) => {
      state.popularValue = action.payload;
    },
    setRecentlyAdded: (state, action) => {
      state.recentlyAddedValue = action.payload;
    },
    setTrending: (state, action) => {
      state.trendingValue = action.payload;
    },
    setUpcoming: (state, action) => {
      state.upcomingValue = action.payload;
    },
    setSearchedValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setMovies,
  setSearchedValue,
  setBoxOfficeHits,
  setPopular,
  setRecentlyAdded,
  setTrending,
  setUpcoming,
} = movieSlice.actions;

export default movieSlice.reducer;
