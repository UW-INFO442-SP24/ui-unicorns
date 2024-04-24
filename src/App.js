import About from './components/Identify/identify.js';
import Home from './components/Home/home.js';
import Map from './components/Map/map.js';
import Support from './components/Support/support.js';
import NavBar from './components/NavBar/navbar.js';


import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
      <div>
        <Router>
          <Routes>
          <Route path="/NavBar" element={<NavBar/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Identify" element={<Identify/>} />
          <Route path="/Support" element={<Support/>} />
          </Routes>
        </Router> 
      </div>
    );
  }