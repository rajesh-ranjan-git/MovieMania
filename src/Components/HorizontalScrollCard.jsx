import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrev = () => {
    containerRef.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto my-2 px-3">
      <h2 className="text-2xl lg:text-2xl text-white font-bold capitalize">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="relative scrollbar-none grid grid-cols-[repeat(auto-fit, 230px)] grid-flow-col gap-5 overflow-hidden overflow-x-scroll scroll-smooth transition-all z-10"
        >
          {data.map((data, index) => {
            return (
              <MovieCard
                key={data.id + "heading" + index}
                data={data}
                trending={trending}
                index={index + 1}
                media_type={media_type}
              />
            );
          })}
        </div>

        {/* Previous and next horizontal scroll */}

        <div className="absolute top-0 px-4 w-full h-full hidden lg:flex items-center justify-between">
          <button
            className="-ml-14 p-2 rounded text-2xl text-neutral-400 hover:text-white cursor-pointer z-10"
            onClick={handlePrev}
          >
            <TiChevronLeftOutline />
          </button>
          <button
            className="-mr-14 p-2 rounded text-2xl text-neutral-400 hover:text-white cursor-pointer z-10"
            onClick={handleNext}
          >
            <TiChevronRightOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
