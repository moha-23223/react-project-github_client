import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:username" element={<UserPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
