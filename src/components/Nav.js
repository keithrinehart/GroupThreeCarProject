import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Chains from '../img/chains.png';

function Nav() {
    const navStyle = {
        color: '#fff',
        textDecoration: 'none'
    };

    return (
        <nav>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="brand-container">
          <img src={Chains} className="chain-1"></img>
           <h3 className="brand">OldSchoolTransport</h3>
           <img src={Chains} className="chain-2"></img>
           </div>
           <ul className="nav-links">
           <Link style={navStyle} to="/">
               <li className="links">Home</li>
             </Link>

             <Link style={navStyle} to="/about">
               <li className="links">About</li>
             </Link>

             <Link style={navStyle} to="/shop">
               <li className="links">Garage</li>
             </Link>

             <Link style={navStyle} to="/prices">
               <li className="links">Prices</li>
             </Link>

             <Link style={navStyle} to="/location">
               <li className="links">Locations</li>
             </Link>
           </ul> 
        </nav>
    );
};

export default Nav;
