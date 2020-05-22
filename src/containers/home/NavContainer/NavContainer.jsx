import React from 'react';
import Nav from '../../../components/home/Nav/Nav';

const NavContainer = () => {
  const login = localStorage.getItem('user');

  return (
    <Nav login={login} />
  );
};

export default NavContainer;
