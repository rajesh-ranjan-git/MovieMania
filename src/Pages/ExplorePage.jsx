import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/MovieCard";

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

      const tempArr = [...data];

      setData((prev) => {
        return [...tempArr, ...response.data.results];
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
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h3 className="my-3 text-lg lg:text-xl font-semibold capitalize">
          Popular {params.explore} Shows
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit, 230px)] gap-6">
          {data.map((exploreData, index) => {
            return <Card key={exploreData.id + "explore"} data={exploreData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
