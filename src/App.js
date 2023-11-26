import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { FaInfoCircle } from "react-icons/fa";
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About';
import HomeDetail from './pages/HomeDetail';
import Others from './pages/Others';
import OthersDetail from './pages/OthersDetail';
import { AiFillStar } from "react-icons/ai";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h3 id="titleGroup">Plant Library</h3>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/detail" element={<HomeDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/others" element={<Others />} />
        <Route path="/others/detail" element={<OthersDetail />} />
      </Routes>
      <footer>
        <NavLink to="/home" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/others" className="iconWrapper">
          <AiFillStar className="icon" />
          Trending 
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <FaInfoCircle className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
