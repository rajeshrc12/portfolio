import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Index1 from "./portfolio1/Index1";
import Index2 from "./portfolio2/Index2";
const router = createHashRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <Index1 />,
  },
  {
    path: "/new",
    element: <Index2 />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
