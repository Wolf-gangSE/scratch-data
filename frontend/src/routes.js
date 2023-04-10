import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ProjectsPage from './pages/ProjectsPage';
import DataBasePage from './pages/DataBasePage';
import Header from './components/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/DataBasePage" element={<DataBasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
