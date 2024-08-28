import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
