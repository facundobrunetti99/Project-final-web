import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import Task from "./page/Task/Task";
import Login from "./page/Login";
import Project from "./page/Project/Project";
import Dashboard from "../src/page/DashBoard/Dashboard";
import PublicHome from "./page/PublicHome/PublicHome";
import Epic from "./page/Epicas/Epic";
import Stories from "./page/Stories/Stories";
const RouterConfig = ({ isAuthenticated }) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index  element={<PublicHome />}></Route>

        <Route element={<AuthRouter isAuthenticated={isAuthenticated} />}>
          <Route path="/project" element={<Project />} />
          <Route path="/project/epics/:projectId" element={<Epic />} />
          <Route
            path="/project/epics/stories/:epicId"
            element={<Stories></Stories>}
          ></Route>
          <Route
            path="/project/epics/stories/task/:storieId"
            element={<Task />}
          ></Route>
        </Route>
      </Route>

      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default RouterConfig;
