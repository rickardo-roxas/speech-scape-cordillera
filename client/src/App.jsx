// Libraries and dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import 'leaflet/dist/leaflet.css';

// Pages and components
import Wrapper from './components/layout/Wrapper';
import LandingPage from './pages/LandingPage';
import ProvinceAndCities from './pages/ProvinceAndCities';
import ProvinceCity from './pages/ProvinceCity';
import Map from './pages/Map';

/**
 * Main application component.
 * @returns {JSX.Element} - The main application component.
 */
function App() {
  return (
    <Router>
      <Toaster position='top-center' reverseOrder={false} />
      <Wrapper>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/map" element={ <Map /> } />
          <Route path="/provinces" element={ <ProvinceAndCities /> } />
          <Route path="/provinces/:name" element={ <ProvinceCity /> } />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;