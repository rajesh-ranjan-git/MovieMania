import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../CustomHooks/useFetchDetails";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.moviemaniaData.imageURL);
  const { data } = useFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castData } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );

  return (
    <div className="relative w-full h-[280px]">
      <div className="w-full h-full">
        <img
          src={imageURL + data?.backdrop_path}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="relative mx-auto -mt-44 lg:mx-0 lg:-mt-32 w-fit">
          <img
            src={imageURL + data?.poster_path}
            className="w-60 2xl:w-72 2xl:h-96 h-80 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
