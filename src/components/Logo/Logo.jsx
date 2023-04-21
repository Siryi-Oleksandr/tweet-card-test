import React from 'react';
import logo from '../../images/logo.png';
import { LogoStyled } from './Logo.styled';

function Logo() {
  return (
    <LogoStyled>
      <img src={logo} alt="logo" />
    </LogoStyled>
  );
}

export default Logo;
