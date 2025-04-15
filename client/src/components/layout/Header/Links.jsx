import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Links.module.css';

/**
 * Navbar links component
 * @returns {JSX.Element} - Rendered Links component
 */
function Links() {
  return (
    <nav className={styles.nav}>
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
        to='/provinces'
        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >  
        Provinces and Cities
      </NavLink>
    </nav>  
  );
}

export default Links;