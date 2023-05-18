import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <button
        className="element__trash-icon"
        type="button"
        aria-label="Кнопка удаления карточки."
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <div className="element__mask-group">
        <div className="element__choose-place">
          <h2 className="element__name-place">{props.card.name}</h2>
          <div className="element__likes">
            <button
              className="element__place-like"
              type="button"
              aria-label="Кнопка нравится."
            ></button>
            <p className="element__likes-counter"></p>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Card;
