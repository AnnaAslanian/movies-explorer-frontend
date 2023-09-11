import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"

function Login() {
  return (
    <main>
      <section>
        <Form
          title="Рады видеть!"
          buttonText="Войти"
          question="Еще не зарегистрированы?"
          linkText=" Регистрация"
          link="/signup"
        >
          <label className="form__label">
            E-mail
            <input
              name="email"
              className="form__input"
              type="email"
              required
              placeholder="Почта"
              minLength="4"
              maxLength="40"
            />
          </label>
          <label className="form__label">
            Пароль
            <input
              name="password"
              className="form__input"
              type="password"
              required
              placeholder="Пароль"
              minLength="6"
              maxLength="20"
            />
          </label>
        </Form>
      </section>
    </main>
  )
}

export default Login