import React from 'react';
import logoPath from '../images/logo.svg';
function Header(){
  return (
    <header className="header">
        <img
          className="header__logo"
          src={logoPath}
          alt="Логотип компании."
        />
      </header>
  )
}
export default Header;