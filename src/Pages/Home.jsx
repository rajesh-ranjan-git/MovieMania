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
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: upcomingData } = useFetch("/movie/upcoming");
  const { data: popularTVShowData } = useFetch("/tv/popular");
  const { data: onTheAirShowData } = useFetch("/tv/on_the_air");

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
        heading={"Now Playing"}
        media_type="movie"
      />

      <HorizontalScrollCard
        data={topRatedData}
        heading={"Top Rated"}
        media_type="movie"
      />

      <HorizontalScrollCard
        data={upcomingData}
        heading={"Upcoming"}
        media_type="movie"
      />

      <HorizontalScrollCard
        data={popularTVShowData}
        heading={"Popular TV Shows"}
        media_type="tv"
      />

      <HorizontalScrollCard
        data={onTheAirShowData}
        heading={"On The Air"}
        media_type="tv"
      />
    </div>
  );
};

export default Home;
