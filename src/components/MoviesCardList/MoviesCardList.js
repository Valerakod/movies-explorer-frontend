import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchError from '../SearchError/SearchError';

function MoviesCardList() {
  return (
    <>
      <section className="cards">
        {/* <Preloader /> */}

        <SearchError errorText={'Not found'} />

        <SearchError
          errorText={
            'Sorry! An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again'
          }
        />
        <ul className="cards__list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </section>
      <div className="cards__button-wrapper">
        <button className="cards__button">More</button>
      </div>
    </>
  );
}

export default MoviesCardList;
