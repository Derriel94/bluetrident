import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Articles from './components/Articles.js';
import AddArticle from './components/AddArticle.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddArticle />
      <Articles />

    </div>
  );
}

export default App;
