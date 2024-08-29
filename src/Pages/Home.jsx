import React from "react";
import BannerHome from "../Components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalMovieCard from "../Components/HorizontalMovieCard";

const Home = () => {
  const trendingMovies = useSelector(
    (state) => state.moviemaniaData.bannerData
  );

  return (
    <div>
      <BannerHome />
      <HorizontalMovieCard data={trendingMovies} heading={"Trending Movies"} />
    </div>
  );
};

export default Home;
