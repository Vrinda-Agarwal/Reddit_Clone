import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <ul>
        <li><span style={{color:"black"}}>GREDDIT</span></li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/mySubGreddits">My SubGreddits</Link>
        </li>
        <li>
          <Link to="/subGreddits">SubGreddits</Link>
        </li>
        <li>
            <Link to="/savedPosts">Saved Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
