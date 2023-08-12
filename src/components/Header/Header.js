import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account_check_icon.svg';
import menu from '../../images/menu-button.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();

  // Temporary function to check if we need the second header
  const temporarilyHeaderSecond = () => {
    const { pathname } = location;
    return (
      pathname === '/movies' ||
      pathname === '/saved-movies' ||
      pathname === '/profile'
    );
  };

  // Temporary function to check if we need the first header
  const temporarilyHeaderOne = () => {
    const { pathname } = location;
    return pathname === '/';
  };

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {temporarilyHeaderOne() && (
        <header className="header" id="header">
          <Link to="/" className="form__logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__button-wrapper">
            <Link to="/signup" className="header__button header__button-shadow">
              Registration
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Sign in
            </Link>
          </div>
        </header>
      )}

      {temporarilyHeaderSecond() && (
        <header className="header header_gray" id="header-gray">
          <Link to="/" className="form__logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header__button-wrapper_films">
            <NavLink
              to="/movies"
              className="header__button"
              ClassName="header__button_active"
            >
              Movies
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__button"
              ClassName="header__button_active"
            >
              Saved movies
            </NavLink>
          </div>
          <div className="header__button-wrapper">
            <Link to="/profile" className="header__account-button">
              <div className="header__account-image-wrapper">
                <a className="header__account-text">Account </a>
                <img
                  className="header__account-image"
                  src={account}
                  alt="account pic"
                />
              </div>
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="menu" />
            </button>
          </div>
          {isClicked ? <Navigation handleClose={handleClose} /> : ''}
        </header>
      )}
    </>
  );
}

export default Header;
