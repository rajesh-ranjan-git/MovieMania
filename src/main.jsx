import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Pages/Home.jsx";
import BoxOfficeHitsPage from "./Pages/BoxOfficeHitsPage.jsx";
import PopularPage from "./Pages/PopularPage.jsx";
import RecentlyAddedPage from "./Pages/RecentlyAddedPage.jsx";
import TrendingPage from "./Pages/TrendingPage.jsx";
import UpcomingPage from "./Pages/UpcomingPage.jsx";
import Favorites from "./Pages/Favorites.jsx";
import Profile from "./Pages/Profile.jsx";
import store from "./Store/store.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/boxofficehits",
        element: <BoxOfficeHitsPage />,
      },
      {
        path: "/popular",
        element: <PopularPage />,
      },
      {
        path: "/recentlyadded",
        element: <RecentlyAddedPage />,
      },
      {
        path: "/trending",
        element: <TrendingPage />,
      },
      {
        path: "/upcoming",
        element: <UpcomingPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
