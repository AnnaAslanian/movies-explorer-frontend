import React from "react";
import "./Promo.css";
import logoPlanet from "../../images/logo_planet_web.svg";
import NavTab from "../NavTab/NavTab";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__conteiner">
                <h1 className="promo__title">Учебный проект студента факультета <span style={{ whiteSpace: 'nowrap' }}>Веб-разработки</span>.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
            </div>
            <img className="promo__image" src={logoPlanet} alt="Планета promo" />
        <NavTab/>
        </section>
    );
}

export default Promo;