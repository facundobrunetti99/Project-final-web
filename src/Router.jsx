import React from "react";
import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
import PublicHome from "../src/page/PublicHome";
import Login from "../src/page/Login";
import Task from "./page/Task";

const router = createBrowserRouter([
  { path: "/", element: <PublicHome />,
    children:[
        {path:"/children", element:<Task></Task>}

    ]

        
    


   },
  { path: "/login", element: <Login /> },

]);

export default router;
