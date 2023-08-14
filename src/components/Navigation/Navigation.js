import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account_check_icon.svg';

function Navigation({ handleClose }) {
  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-wrapper"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleClose}
        ></button>
        <nav className="navigation__links-list">
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Main
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Movies
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Saved movies
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__account-button">
          <a className="navigation__account-text">Account </a>
          <img src={account} alt="account" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
