import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Wrapper from './components/layout/Wrapper';
// Import pages here.

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          // To define other routes
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;