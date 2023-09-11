import React, { useState } from "react";
import imageFilm from "../../images/image-movies.jpg"
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const location = useLocation();
  const [liked, setLiked] = useState(false);
  const nameImage = "33 слова о дизайне"

  const toggleLike = () => {
    setLiked(!liked);
  };

  const buttonImages = () => {
    if (location.pathname === "/movies") return (liked ? "card__like-button--active" : "card__like-button");
    if (location.pathname === "/saved-movies") return "card__delete-button";
  }

  return (
    <>
      <li className="card">
        <img src={imageFilm} alt={nameImage} className="card__image" />
        <div className="card__container">
          <div className="card__name-block">
            <h2 className="card__name">{nameImage}</h2>
            <span className="card__time">1ч45м</span>
          </div>
          <button type="button" className={buttonImages()} onClick={toggleLike}></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;