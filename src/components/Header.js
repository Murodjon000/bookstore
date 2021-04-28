import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../assets/user.svg';

const Header = () => (
  <header className="header__box">
    <div className="header__box_innerBox">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </div>
    <div>
      <span className="user__oval">
        <img src={image} alt="user" />
      </span>
    </div>
  </header>
);

export default Header;
