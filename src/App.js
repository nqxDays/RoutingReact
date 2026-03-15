import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import City from "./City";
import MainAttraction from "./MainAttraction";
import OtherAttractions from "./OtherAttractions";
import Photos from "./Photos";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Місто Париж</h1>

        <nav className="menu">
          <Link className="btn" to="/">
            Місто
          </Link>
          <Link className="btn" to="/main">
            Головна пам'ятка
          </Link>
          <Link className="btn" to="/other">
            Інші пам'ятки
          </Link>
          <Link className="btn" to="/photos">
            Фотографії
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<City />} />
          <Route path="/main" element={<MainAttraction />} />
          <Route path="/other" element={<OtherAttractions />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
