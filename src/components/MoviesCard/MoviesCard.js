import React from 'react';

import './MoviesCard.css';

function MoviesCard() {
  return (
    <>
      <li className="card">
        {/* I inserted a card to see the layout of the page */}
        <div aria-label="my picture" className="card__image" />
        <div className="card__wrapper">
          <div className="card__title-block">
            <h2 className="card__title">Lovely cat</h2>
            <span className="card__time">120</span>
          </div>
          <button type="button" className="card__delete-button"></button>
        </div>
      </li>
      <li className="card">
        {/* I inserted a card to see the layout of the page */}
        <div aria-label="my picture" className="card__image" />
        <div className="card__wrapper">
          <div className="card__title-block">
            <h2 className="card__title">Lovely cat</h2>
            <span className="card__time">120</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
