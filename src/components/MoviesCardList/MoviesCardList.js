import React from "react"
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList() {
  return (
    <section className="cards">
      <ul className="cards__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
       
      </ul>
      <div className="cards__button-container">
        <button className="cards__button" type="button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;