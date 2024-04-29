import React from 'react';
import NavBar from './components/NavBar/navbar.js';
import Home from './components/Home/home.js';
import FindHelp from './components/FindHelp/findhelp.js';
import Identify from './components/Identify/identify.js';
import Connect from './components/Connect/connect.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FindHelp" element={<FindHelp />} />
          <Route path="/Identify" element={<Identify />} />
          <Route path="/Connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}
