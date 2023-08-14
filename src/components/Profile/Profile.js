import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      {/* <Header /> */}
      <section className="profile">
        <h3 className="profile__title">Hello Valeriia!</h3>
        <form id="form" className="profile__form" noValidate>
          <label className="profile__label">
            Name
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              required
              placeholder="name" 
            />
            <span className="profile__input-error"></span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__label">
            Email
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              required
              placeholder="email" 
            />
            <span className="profile__input-error"></span>
          </label>
          <button type="submit" className="profile__button-save">
          Edit
          </button>
          <button type="button" className="profile__exit">
            Exit
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
