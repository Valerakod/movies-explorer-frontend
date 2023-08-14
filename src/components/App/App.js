import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
  const location = useLocation();

  // Temporary function to check if we need a Header
  const temporarilyShowHeader = () => {
    const { pathname } = location;
    return (
      pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies' ||
      pathname === '/profile'
    );
  };

  // Temporary function to check if we need a Footer
  const temporarilyShowFooter = () => {
    const { pathname } = location;
    return pathname === '/';
  };

  return (
    <div className="page">
      <div className="page__wrapper">
        {temporarilyShowHeader() && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {temporarilyShowFooter() && <Footer />}
      </div>
    </div>
  );
}

export default App;
