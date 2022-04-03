import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'


const Header = () => {
    return (
        <nav className='navbar'>

            <h1 className="header-title">BIG brand reviews</h1>

          <div className='link'>
              
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'/reviews'}>Reviews</NavLink>
                  <NavLink to={'/dashboard'}>DashBoard</NavLink>
                  <NavLink to={'/blogs'}>Blogs</NavLink>
                  <NavLink to={'/about'}>About</NavLink>
             
          </div>
        </nav>
    );
};

export default Header;