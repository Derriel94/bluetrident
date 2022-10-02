import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Articles from './components/Articles.js';
import AddArticle from './components/AddArticle.js';
import NavBar from './components/NavBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flextry">
        <Articles />
        <AddArticle />
     </div>

    </div>
  );
}

export default App;
