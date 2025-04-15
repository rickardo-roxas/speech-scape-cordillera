// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Logo from '../../ui/Logo';
import Search from './Search';

/**
 * Reusable Navbar component that renders the logo, navigation links, and search input field.
 * @returns {JSX.Element} - Rendered Navbar component
 */
function Navbar() {
  return (
    <>
      <Logo />
      <Search />
    </>
  );
}

export default Navbar;