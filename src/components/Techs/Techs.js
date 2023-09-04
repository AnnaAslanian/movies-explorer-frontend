import React from "react";
import "./Techs.css";

function Techs() {
    const stackTechs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__about">
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
<ul className="techs__list">
{stackTechs.map((element, index) => (<li key={index} className="techs__list-title">{element}</li>))}
</ul>
        </section>
    )
}

export default Techs;