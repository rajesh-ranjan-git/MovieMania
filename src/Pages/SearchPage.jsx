import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import LoaderComponent from "../Components/LoaderComponent";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.substring(3),
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
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
    let timerID = setTimeout(() => {
      setPageNo(1);
      setData([]);
      fetchData();
    }, 800);

    setLoading(false);

    return () => clearTimeout(timerID);
  }, [location?.search]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScrolling(true);
    fetchData();
    setScrolling(false);
  }, [pageNo]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <form className="lg:hidden mx-auto m-2 max-w-72 flex items-center sticky top-28 z-10">
          <input
            type="text"
            placeholder="Search here..."
            className="mb-3 px-4 py-3 w-full bg-white text-neutral-900 text-center outline-none border-none rounded-full"
            onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          />
        </form>

        <h3 className="my-3 text-lg lg:text-xl font-semibold text-center capitalize">
          Search Results
        </h3>

        {loading && (
          <div className="flex justify-center w-full">
            <LoaderComponent />
          </div>
        )}

        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {data.map((searchData, index) => {
            return (
              <MovieCard
                key={searchData.id + "search" + index}
                data={searchData}
                media_type={searchData.media_type}
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

export default SearchPage;
