import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import LoaderComponent from "../Components/LoaderComponent";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const fetchData = async () => {
    console.log("loading", loading);
    console.log("scrolling", scrolling);
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });

      setTotalPageNo(response.data.total_pages);
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
    setLoading(false);
  }, [params.explore]);

  useEffect(() => {
    setScrolling(true);
    fetchData();
    setScrolling(false);
  }, [pageNo]);

  return (
    <div className="pt-24 pb-16">
      {loading && (
        <div className="flex justify-center items-center w-full h-[90vh]">
          <LoaderComponent />
        </div>
      )}
      <div className="container mx-auto">
        <h3 className="my-3 text-lg lg:text-xl font-semibold text-center capitalize">
          Popular {params.explore === "tv" ? "TV Shows" : "Movies"}
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {data.map((exploreData, index) => {
            return (
              <MovieCard
                key={exploreData.id + "explore" + index}
                data={exploreData}
                media_type={params.explore}
              />
            );
          })}
        </div>

        {scrolling && (
          <div className="flex justify-center w-full">
            <LoaderComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
