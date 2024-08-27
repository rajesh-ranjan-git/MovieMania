import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  boxOfficeHitsValue: [],
  popularValue: [],
  recentlyAddedValue: [],
  trendingValue: [],
  upcomingValue: [],
  searchValue: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setBoxOfficeHitsSlice: (state, action) => {
      state.boxOfficeHitsValue = action.payload;
    },
    setPopularSlice: (state, action) => {
      state.popularValue = action.payload;
    },
    setRecentlyAddedSlice: (state, action) => {
      state.recentlyAddedValue = action.payload;
    },
    setTrendingSlice: (state, action) => {
      state.trendingValue = action.payload;
    },
    setUpcomingSlice: (state, action) => {
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
