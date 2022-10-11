import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Articles from './components/Articles.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import AddArticle from './components/AddArticle.js';
import NavBar from './components/NavBar.js';
import AdComponent from './components/AdComponent.js';
import Donate from './components/Donate.js';
import './App.css';

function App() {
  // the state below is used to create a conditional to check
  //wether we are on the main page or not.
  const [mainPage, setMainPage] = useState(true);
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/register" element ={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/createblog" element={<AddArticle />}/>
          <Route path="/donate" element={<Donate />}/>
          <Route path="/" element={
             <div className="flextry">
              <div>
                <AdComponent />
              </div>
              <div>
                <Articles mainPage={mainPage}/>
              </div>
              <div>
              <AdComponent />
              </div>
            </div>
          }/>
        </Routes>     
      </Router>
    </div>
  );
}

export default App;
