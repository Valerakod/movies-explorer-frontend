import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"

function Register() {
  return (
    <Form
      title="Welcome!"
      buttonText="Register"
      question="Already registered?"
      linkText=" Sign in"
      link="/signin"
    >
      <label className="form__label">
        Name
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="name" 
        />
        <span className="form__input-error">Fill in the line</span>
      </label>
      <label className="form__label">
        Email
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="email" 
        />
        <span className="form__input-error">The email address must contain the symbol "@".</span>
      </label>
      <label className="form__label">
      Password
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          placeholder="password" 
        />
        <span className="form__input-error">Fill in the line</span>
      </label>
    </Form>
  )
}

export default Register
