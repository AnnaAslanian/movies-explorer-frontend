import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <h2 className="about-project__title">О проекте</h2>
            <ul className="about-project__block">
                <li className="about-project_block-info">
                <h3 className="about-project__card-title">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__card-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </li>
            <li className="about-project_block-info">
                <h3 className="about-project__card-title">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__card-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
            </ul>

            <div className="about-project__time">
                <h3 className="about-project__time-week about-project__time-week_green">
                    1 неделя
                </h3>
                <h3 className="about-project__time-week">4 недели</h3>
                <p className="about-project__time-name">Back-end</p>
                <p className="about-project__time-name">Front-end</p>
            </div>
        </section >
    )
}

export default AboutProject;