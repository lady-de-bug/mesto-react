import React from 'react';

function ImagePopup(props) {
  return (
    <div className="popup popup_type_image">
        <div className="popup__container-image">
          <figure className="popup__image">
            <img className="popup__large-image" src="#" alt="#" />
            <figcaption className="popup__image-caption" />
          </figure>
          <button
          onClick={props.onClose}
            className="popup__close-icon"
            type="button"
            aria-label="Закрыть форму."
          />
        </div>
      </div>
  )
}
export default ImagePopup