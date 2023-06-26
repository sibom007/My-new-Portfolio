import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./page/Home/Home";
import Myproject from "./page/Home/Myproject/Myproject";
import ToyDetails from "./page/Home/Allprojectdetels/Toydetels/ToyDetails";
import SatkhiraDetails from "./page/Home/Allprojectdetels/SatkhiraDetails/SatkhiraDetails";
import AdventureCampusDetails from "./page/Home/Allprojectdetels/AdventureCampusDetails/AdventureCampusDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "myproject",
        element: <Myproject />,
      },
      {
        path: "Toydetails",
        element: <ToyDetails />,
      },
      {
        path: "SatkhiraDetails",
        element: <SatkhiraDetails />,
      },
      {
        path: "AdventureCampusDetails",
        element: <AdventureCampusDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
