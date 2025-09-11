import React from 'react'
import Home from './Home';
import About from './About';
import Help from './Help';
import {NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
     <nav >
      <ul  style={{listStyle:"none"}}>
        <li><NavLink to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              borderBottom: isActive ? "2px solid red" : "none",
              textDecoration: "none",
              padding: "5px"
            })}>Home</NavLink> </li>
        <li><NavLink   to="/about"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              borderBottom: isActive ? "2px solid red" : "none",
              textDecoration: "none",
              padding: "5px"
            })}>About</NavLink></li>
        <li><NavLink to="/help"   
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              borderBottom: isActive ? "2px solid red" : "none",
              textDecoration: "none",
              padding: "5px"
            })}>Help</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation