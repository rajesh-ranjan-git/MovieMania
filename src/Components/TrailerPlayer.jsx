import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import useFetchDetails from "../CustomHooks/useFetchDetails";

const TrailerPlayer = ({ data, close, media_type }) => {
  const { data: trailerData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );

  console.log(trailerData?.results);

  return (
    <section className="fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-neutral-700  bg-opacity-50 z-40">
      <div className="relative w-full max-w-screen-lg aspect-video rounded bg-black">
        <button
          className="absolute -top-7 -right-1 text-3xl font-extrabold"
          onClick={close}
        >
          <IoCloseOutline />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${trailerData?.results?.[0].key}`}
          frameborder="0"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default TrailerPlayer;
