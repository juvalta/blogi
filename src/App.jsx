import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router,
  Routes, Route
 } from 'react-router-dom';
 import LandingPage from './components/LandingPage';
 import TokkaaOtokkaa from './components/TokkaaOtokkaa';
 import BlackHole from './components/BlackHole';
 import VisaKisaaja from './components/VisaKisaaja'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="" element={<LandingPage />} />
          <Route exact path="/blogi" element={<LandingPage />} />
          <Route exact path="/tokkaaotokkaa" element={<TokkaaOtokkaa/>} />
          <Route exact path="/blackhole" element={<BlackHole/>}/>
          <Route exact path="/blogi/tokkaaotokkaa" element={<TokkaaOtokkaa/>} />
          <Route exact path="/blogi/blackhole" element={<BlackHole/>}/>
          <Route exact path="/visakisaaja" element={<VisaKisaaja />}/>
          <Route exact path="/blogi/visakisaaja" element={<VisaKisaaja />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
