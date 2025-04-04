import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import RepoPage from './pages/RepoPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/repo/:owner/:repoName" element={<RepoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
