import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });

      // const tempArr = [...data];

      setData((prev) => {
        return [...prev, ...response.data.results];
      });

      // setData((prev) => {
      //   return [...tempArr, ...response.data.results];
      // });

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
  }, []);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <h3 className="my-3 text-lg lg:text-xl font-semibold text-center capitalize">
          Popular {params.explore === "tv" ? "TV Shows" : "Movies"}
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {data.map((exploreData, index) => {
            return (
              <MovieCard
                key={exploreData.id + "explore"}
                data={exploreData}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
