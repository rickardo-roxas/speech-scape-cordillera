import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../common/Logo';
import Search from '../forms/Search';
import LinkButton from '../common/button/LinkButton';


function Navbar() {
  return (
    <>
      <Logo />
      <Search />
      <LinkButton />
    </>
  );
}

export default Navbar;