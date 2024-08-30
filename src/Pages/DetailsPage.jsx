import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../CustomHooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../Components/Divider";
import HorizontalScrollCard from "../Components/HorizontalScrollCard";
import TrailerPlayer from "../Components/TrailerPlayer";

const DetailsPage = () => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const [trailerData, setTrailerData] = useState([]);
  const params = useParams();
  const imageURL = useSelector((state) => state.moviemaniaData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendedData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");

  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    .join(", ");

  const director = castData?.crew
    ?.filter((el) => el?.job === "Director")
    ?.map((el) => el?.name)
    .join(", ");

  const handleTrailerPlayer = (data) => {
    setPlayTrailer(true);
    setTrailerData(data);
  };

  return (
    <div>
      <div className="relative w-full h-[280px] 2xl:h-[400px]">
        <div className="w-full h-full">
          {data?.backdrop_path && (
            <img
              src={imageURL + data?.backdrop_path}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>
      <div className="container flex flex-col lg:flex-row gap-5 lg:gap-28 mx-auto px-4">
        <div className="relative mx-auto -mt-44 lg:mx-0 lg:-mt-32 2xl:-mt-52 w-fit">
          <img
            src={imageURL + data?.poster_path}
            className="w-60 min-w-60 2xl:min-w-96 2xl:w-96 2xl:h-[32rem] h-80 object-cover rounded"
          />
          <button
            className="my-4 px-4 py-2 w-full bg-white hover:bg-gradient-to-l from-red-700 to-orange-300 font-extrabold text-black hover:text-white rounded shadow-md transition-all hover:scale-105"
            onClick={() => handleTrailerPlayer(data)}
          >
            Watch Trailer
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-white">
            {data.title || data.name}
          </h2>
          <p className="text-neutral-400">{data.tagline}</p>

          <Divider />

          <div className="flex items-center gap-2 my-3">
            <p>
              <span className="text-white font-semibold">Rating : </span>
              {Number(data?.vote_average).toFixed(1)}+
            </p>
            <span>|</span>
            <p>
              <span className="text-white font-semibold">Views : </span>
              {Number(data?.vote_count)}
            </p>
            <span>|</span>
            <p>
              <span className="text-white font-semibold">Duration : </span>
              {duration[0]}h {duration[1]}m
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="my-3 text-xl font-bold text-white">Overview</h3>
            <p>{data?.overview}</p>

            <Divider />

            <div className="flex items-center gap-2 my-4 text-center">
              <p>
                <span className="text-white font-semibold">Status : </span>
                {data?.status}
              </p>
              <span>|</span>
              <p>
                <span className="text-white font-semibold">
                  Release Date :{" "}
                </span>{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>
                <span className="text-white font-semibold">Revenue : </span>
                {data?.revenue}
              </p>
            </div>

            <Divider />

            <div>
              <p>
                <span className="text-white font-semibold">Director : </span>
                {director}
              </p>
              <Divider />
              <p>
                <span className="text-white font-semibold">Writer : </span>
                {writer}
              </p>
            </div>

            <Divider />

            <h2 className="my-5 text-xl font-bold text-white">Cast : </h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
              {castData?.cast
                ?.filter((el) => el.profile_path)
                .map((starCast, index) => {
                  return (
                    <div>
                      <div>
                        <img
                          src={imageURL + starCast?.profile_path}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-bold text-center">
                        {starCast.name}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalScrollCard
          data={similarData.results}
          heading={
            "Similar " + (params?.explore === "tv" ? "TV Shows" : "Movies")
          }
          media_type={params?.explore}
        />
      </div>

      <div>
        <HorizontalScrollCard
          data={recommendedData.results}
          heading={
            "Recommended " + (params?.explore === "tv" ? "TV Shows" : "Movies")
          }
          media_type={params?.explore}
        />
      </div>

      {playTrailer && (
        <TrailerPlayer
          data={trailerData}
          close={() => setPlayTrailer(false)}
          media_type={params?.explore}
        />
      )}
    </div>
  );
};

export default DetailsPage;
