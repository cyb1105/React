import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item">Home</NavLink>
      <NavLink to="/About/cyb" className="item">About</NavLink>
      <NavLink to="/Posts" className="item">Posts</NavLink>
      <NavLink to="/Login" className="item">Login</NavLink>
      <NavLink to="/MyProfile" className="item">MyProfile</NavLink>
      <NavLink to="/Search" className="item">Search</NavLink>
    </div>
  );
};

export default Header;