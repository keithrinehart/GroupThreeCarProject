We aimport React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: '#fff',
        textDecoration: 'none'
    };

    return (
        <nav>
           <h3 className="brand">OldSchoolTransport</h3>
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
           </ul> 
        </nav>
    );
};

export default Nav;

