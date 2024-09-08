import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Articles from './components/Articles.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import AddArticle from './components/AddArticle.js';
import NavBar from './components/NavBar.js';
import AdComponent from './components/AdComponent.js';
import NewsLetter from './components/NewsLetter.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logout} from "./firebaseConfig.js"
import './App.css';

function App() {
  // the state below is used to create a conditional to check
  //wether we are on the main page or not.
  const [mainPage, setMainPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [tempName, setTempName] = useState('');
  const [mainUser, setMainUser] = useState();
  
      useEffect(() => {
    if (loading) return;
    if (user) {
          if(user.displayName) {
          setTempName(user.displayName)
          } 
          if (user.displayName === "Derriel Collins"){
          setMainUser(true)
          }
      setIsLoggedIn(true);
     
    } else {
      setIsLoggedIn(false);
   
    }
  }, [user, loading, isLoggedIn,]);




  return (
    <div className="App">
      <Router>
      <NavBar user={user} mainUser={mainUser} tempName={tempName} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/register" element ={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/createblog" element={<AddArticle />}/>
          <Route path="/newsletter" element={<NewsLetter />}/>
          <Route path="/gallery" element ={<Gallery />}/>
          <Route path="/" element={<Articles mainPage={mainPage} isLoggedIn={isLoggedIn}/>}/>       
        </Routes>
        <Footer />   
      </Router>
    </div>
  );
}

export default App;
