import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Links.module.css';

/**
 * Navbar links component
 * @returns {JSX.Element} - Rendered Links component
 */
function Links(className='') {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <NavLink 
        to='/' 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Home
      </NavLink>
      <NavLink 
        to='/map' 
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Map
      </NavLink>
      <NavLink
        to='/province-city'
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >  
        Provinces and Cities
      </NavLink>
    </nav>  
  );
}

export default Links;