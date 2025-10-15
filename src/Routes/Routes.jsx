import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import App from "../pages/App";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AppDetails from "../pages/AppDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    children: [
        {
    index: true,
    element: <Home/>,
  },
   {
    path: "/app",
    element: <App/>,
  },    
   {
    path: "/installation",
    element: <Installation/>,
  },
  {
    path: '/app/:id',
    element: <AppDetails/>,
  }

    ]
  },
  

]);