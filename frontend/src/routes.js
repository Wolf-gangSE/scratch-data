import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ProjectsPage from './pages/ProjectsPage';
import Header from './components/Header';
import ProjectsClassProjects from './pages/ProjectsClassProjects';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/ProjectsClassProjects" element={<ProjectsClassProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
