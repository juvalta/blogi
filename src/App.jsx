import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router,
  Routes, Route
 } from 'react-router-dom';
 import LandingPage from './componenets/LandingPage';
 import TokkaaOtokkaa from './componenets/TokkaaOtokkaa';
 import BlackHole from './componenets/BlackHole';

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
        </Routes>
      </Router>
      
    </>
  )
}

export default App
