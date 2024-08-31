import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MobileNavigation from "./Components/MobileNavigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./Store/moviemaniaSlice";
import LoaderComponent from "./Components/LoaderComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
    setLoading(false);
  }, []);

  return (
    <main className="relative pb-14 lg:pb-0">
      {loading && (
        <div className="flex justify-center items-center w-full h-[90vh]">
          <LoaderComponent />
        </div>
      )}
      <Header />
      <div className="min-h-[90vh] 2xl:min-h-[93.4vh]">
        <Outlet />
      </div>
      <Footer />

      <MobileNavigation />
    </main>
  );
}

export default App;
