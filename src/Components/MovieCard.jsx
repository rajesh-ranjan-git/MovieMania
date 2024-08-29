import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.moviemaniaData.imageURL);

  return (
    <Link
      to={"/" + data.media_type + "/" + data.id}
      className="relative block w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded hover:scale-105 transition-all"
    >
      <img src={imageURL + data?.poster_path} />
      <div className="absolute top-4">
        {trending && (
          <div className="py-1 px-4 bg-black/60 backdrop:blur-3xl rounded-r-full overflow-hidden">
            # {index} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 p-2 w-full h-20 bg-black/50 backdrop-blur-3xl">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="flex flex-col text-sm text-neutral-400">
          <p>Released : {moment(data.release_date).format("MMMM Do YYYY")}</p>
          <p className="text-xs text-white">
            Rating : {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
