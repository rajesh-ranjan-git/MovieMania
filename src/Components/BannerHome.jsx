import React from "react";
import { useSelector } from "react-redux";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.moviemaniaData.bannerData);
  const imageURL = useSelector((state) => state.moviemaniaData.imageURL);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div className="relative min-w-full min-h-[450px] lg:min-h-full group">
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  className="w-full h-full object-cover overflow-hidden"
                />
              </div>

              {/* Previous and next button */}

              <div className="absolute top-0 px-4 w-full h-full hidden items-center justify-between group-hover:flex">
                <button className="p-2 rounded text-2xl text-neutral-600 hover:text-white cursor-pointer z-10">
                  <TiChevronLeftOutline />
                </button>
                <button className="p-2 rounded text-2xl text-neutral-600 hover:text-white cursor-pointer z-10">
                  <TiChevronRightOutline />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto">
                <div className="absolute bottom-0 px-3 max-w-md">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data.title}
                  </h2>
                  <p className="my-3 text-ellipsis line-clamp-3">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>Views : {Number(data.popularity).toFixed(0)}+</p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-white hover:bg-gradient-to-l from-red-200 to-orange-700 font-bold text-black rounded shadow-md transition-all hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
