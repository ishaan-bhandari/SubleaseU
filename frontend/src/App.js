import React, { useState, useEffect } from 'react';
import axios from "axios";
//import logo from './logo.svg';
import './App.css';
import Listing from './Listing.js';
import NavigationBar from './Navbar.js'
import PostListing from './PostListing.js'
import Home from './Home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/post-listing' element={<PostListing />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;