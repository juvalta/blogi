import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router,
  Routes, Route
 } from 'react-router-dom';
 import LandingPage from './componenets/LandingPage';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="" element={<LandingPage />} />
          <Route exact path="/blogi" element={<LandingPage />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
