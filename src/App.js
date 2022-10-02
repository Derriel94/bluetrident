import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Articles from './components/Articles.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import AddArticle from './components/AddArticle.js';
import NavBar from './components/NavBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/register" element ={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={
             <div className="flextry">
              <Articles />
              <AddArticle />
            </div>
          }/>
        </Routes>
       
       
      </Router>
    </div>
  );
}

export default App;
