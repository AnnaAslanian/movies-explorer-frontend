import React from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
    return (
        <section className="error">
            <div className="error__container">
                <h2 className="error__title">404</h2>
                <p className="error__text">Страница не найдена</p>
                <Link to="/" className="error__button">Назад</Link>
            </div>
        </section>
    )
}

export default NotFound;