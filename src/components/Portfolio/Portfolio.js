import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li>
            <a
              href="https://annaaslanian.github.io/how-to-learn/"
              className="portfolio__link portfolio__link-hover"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__name">Статичный сайт</p>
              <img
                className="portfolio__image"
                src={arrow}
                alt="стрелка"
              />
            </a>
          </li>
          <li>
            <a
              href="https://annaaslanian.github.io/russian-travel/"
              className="portfolio__link portfolio__link-hover"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__name">Адаптивный сайт</p>
              <img
                className="portfolio__image"
                src={arrow}
                alt="стрелка"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AnnaAslanian/react-mesto-auth.git"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__name">Одностраничное приложение</p>
              <img
                className="portfolio__image"
                src={arrow}
                alt="стрелка"
              />
            </a>
          </li>
        </ul>
      </section>
    );
}

export default Portfolio