// Libraries and dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'leaflet/dist/leaflet.css';

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
          <Route path="/" element={ 
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <LandingPage />
            </ErrorBoundary> } 
          />
          <Route path="/map" element={ 
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <MapPage /> 
            </ErrorBoundary> } 
            />
          <Route path="/province-city" element={ 
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <ProvinceAndCitiesPage />
            </ErrorBoundary> } 
          />
          <Route path="/province-city/city/:name" element={ 
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <CityPage />
            </ErrorBoundary> } 
          />
          <Route path="/province-city/province/:name" element={ 
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <ProvincePage /> 
            </ErrorBoundary>} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;