import './App.css';
// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import Prizes from "./pages/prizes";
import Schedule from "./pages/schedule";
import Judges from "./pages/judges";
import FAQ from "./pages/faq";

function App() {
	return (
    <div className='topbar'>
      <div className='left-col'> 
        <div className='blocsoc-icon'>
          <img src='/icon/blocsoc.jpeg' alt='Blocsoc Icon' className='blocsoc-icon-img'></img>
        </div>
       </div> 
      <div className='Navigation-bar'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/prizes" element={<Prizes />} />
            <Route
              path="/schedule"
              element={<Schedule />}
            />
            <Route path="/judges" element={<Judges />} />
            <Route
              path="/faq"
              element={<FAQ />}
            />
          </Routes>
        </Router>
      </div>
      <div className='right-col'>
        <button className='register-button'>
          REGISTER
        </button>
      </div>
    </div>
	);
}

export default App;
