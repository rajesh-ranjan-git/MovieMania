import React from "react";
import BannerHome from "../Components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../Components/HorizontalScrollCard";
import useFetch from "../CustomeHooks/useFetch";

const Home = () => {
  const trendingMovies = useSelector(
    (state) => state.moviemaniaData.bannerData
  );

  const { data: nowPlayingData } = useFetch("/movie/now_playing");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingMovies}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing Movies"}
      />
    </div>
  );
};

export default Home;
