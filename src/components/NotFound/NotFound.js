import React from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
    return (
        <section className="error">
            <main className="error__main">
                <div className="error__container">
                    <h1 className="error__title">404</h1>
                    <p className="error__text">Страница не найдена</p>
                    <Link to="/" className="error__button">Назад</Link>
                </div>
            </main>
        </section>
    )
}

export default NotFound;