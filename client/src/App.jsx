// Libraries and dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages and components
import ErrorBoundary from './components/ui/ErrorBoundary/ErrorBoundary';
import Wrapper from './components/layout/Wrapper';
import LandingPage from './pages/LandingPage';
import ProvinceAndCitiesPage from './pages/ProvincesAndCitiesPage';
import ProvincePage from './pages/ProvincePage';
import CityPage from './pages/CityPage';
import MapPage from './pages/MapPage';

/**
 * Main application component.
 * @returns {JSX.Element} - The main application component.
 */
function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Wrapper>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/map" element={ <MapPage /> } />
          <Route path="/province-city" element={ <ProvinceAndCitiesPage /> } />
          <Route path="/province-city/city/:name" element={ <CityPage /> } />
          <Route path="/province-city/province/:name" element={ <ProvincePage /> } />
        </Routes>
      </Wrapper>
      </ErrorBoundary>
    </Router>
  );
}

export default App;