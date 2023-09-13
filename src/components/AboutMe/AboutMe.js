import React from "react";
import avatar from "../../images/photo-me.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about">
        <div className="about__info">
          <h3 className="about__name">Анна</h3>
          <h4 className="about__profession">Фронтенд-разработчик, 31 год</h4>
          <p className="about__subtitle">
          Я из города Вологды, у меня есть муж и сын, закончила педагогический университет, факультет филологии. Работаю индивидуальным предпринимателем. Больше года назад начала изучать программирование, после окончания обучения буду работать по новой специальности.
          </p>
          <a
            href="https://github.com/AnnaAslanian"
            className="about__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={avatar} alt="Фото Анны Асланян" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;