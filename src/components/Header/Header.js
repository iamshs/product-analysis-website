import React from 'react';
import {  Link } from 'react-router-dom';

import './Header.css'


const Header = () => {
    return (
        <nav className='navbar'>

            <h1 className="header-title">BIG brand reviews</h1>

          <div className='link'>
              
                  <Link to={'/'}>Home</Link>
                  <Link to={'/reviews'}>Reviews</Link>
                  <Link to={'/dashboard'}>DashBoard</Link>
                  <Link to={'/blogs'}>Blogs</Link>
                  <Link to={'/about'}>About</Link>
             
          </div>
        </nav>
    );
};

export default Header;