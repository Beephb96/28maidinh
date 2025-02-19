import React from "react";
import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Mainlayout />,,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]