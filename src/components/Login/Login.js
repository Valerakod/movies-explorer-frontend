import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"

function Login() {
  return (
    <Form
      title="Welcome!"
      buttonText="Sign in"
      question="Not registered yet?"
      linkText=" Registration"
      link="/signup"
    >
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
        <span className="form__input-error">Enter password</span>
      </label>
    </Form>
  )
}

export default Login
