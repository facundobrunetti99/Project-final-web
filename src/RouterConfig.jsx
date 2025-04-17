import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import Task from './page/Task/Task';
import Login from './page/Login';
import Project from './page/Project/Project';
import Dashboard from './page/DashBoard/Dashboard';
import PublicHome from './page/PublicHome/PublicHome';
import Epic from './page/Epicas/Epic';
import Stories from './page/Stories/Stories';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<PublicHome />} />
        <Route element={<AuthRouter />}>
          <Route path="/project" element={<Project />} />
          <Route path="/project/epics/:projectId" element={<Epic />} />
          <Route path="/project/epics/stories/:epicId" element={<Stories />} />
          <Route path="/project/epics/stories/task/:storieId" element={<Task />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RouterConfig;
