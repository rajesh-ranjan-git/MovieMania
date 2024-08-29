import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes";
import axios from "axios";
import { Provider } from "react-redux";
import { appStore } from "./Store/store";

/* Axios Setup */

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_MOVIEMANIA_ACCESS_TOKEN
}`;

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
