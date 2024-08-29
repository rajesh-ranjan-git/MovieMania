import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.moviemaniaData.bannerData);
  const imageURL = useSelector((state) => state.moviemaniaData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 4000);

    return clearInterval(interval);
  }, [bannerData, imageURL]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={index}
              className="relative min-w-full min-h-[450px] lg:min-h-full group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  className="w-full h-full object-cover overflow-hidden"
                />
              </div>

              {/* Previous and next button */}

              <div className="absolute top-0 px-4 w-full h-full hidden items-center justify-between group-hover:lg:flex">
                <button
                  className="p-2 rounded text-2xl text-neutral-400 hover:text-white cursor-pointer z-10"
                  onClick={handlePrev}
                >
                  <TiChevronLeftOutline />
                </button>
                <button
                  className="p-2 rounded text-2xl text-neutral-400 hover:text-white cursor-pointer z-10"
                  onClick={handleNext}
                >
                  <TiChevronRightOutline />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto">
                <div className="absolute bottom-0 px-3 max-w-md">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data?.title || data?.name}
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
