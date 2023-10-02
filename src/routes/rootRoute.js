import React from "react";
import {Outlet, createBrowserRouter} from "react-router-dom";
import Header from "../containers/Header";
import Home from "../pages/Home";
import Weather from "../pages/Weather";

export const routes = createBrowserRouter([
  {
    path: '',
    element: <><Header /><main><Outlet /></main></>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'weather',
        element: <Weather />
      }
    ]
  }
]);
