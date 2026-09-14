import React from "react";
// 1. Missing imports add kiye gaye hain
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

// 2. Router ko component ke baahar define kiya gaya hai
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Services />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
