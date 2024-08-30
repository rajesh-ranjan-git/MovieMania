import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MobileNavigation from "./Components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./Store/moviemaniaSlice";

function App() {
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
  }, []);

  return (
    <main className="relative pb-14 lg:pb-0">
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
