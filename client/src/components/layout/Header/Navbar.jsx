// Libraries
import React from 'react';

// Custom components
import Logo from './Logo';
import Search from './Search';
import Links from './Links';

import styles from './Navbar.module.css';

/**
 * Reusable Navbar component that renders the logo, navigation links, and search input field.
 * @returns {JSX.Element} - Rendered Navbar component
 */
function Navbar() {
  // add context for search here
  return (
    <header className={styles.header}>
      <Logo />
      <Links />
      <Search />
    </header>
  );
}

export default Navbar;