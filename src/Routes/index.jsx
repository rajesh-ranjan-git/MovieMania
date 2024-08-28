import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";
import ExplorePage from "../Pages/ExplorePage";
import SearchPage from "../Pages/SearchPage";

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
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "/404",
        element: <Error />,
      },
    ],
  },
]);

export default appRouter;
