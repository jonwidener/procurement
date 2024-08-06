import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Requests from './pages/requests';

export default () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
    </Routes>
  </Router>
);
