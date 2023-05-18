import React from 'react';
import PopupWithForm from './PopupWithForm';

function PlacePopup(props) {
  return (
    <PopupWithForm name="place" title="Новое место" isOpen={props.isOpen} onClose={props.onClose}>
      <input
        name="name"
        type="text"
        placeholder="Название"
        className="popup__input popup__input_type_place"
        aria-label="Введите название места."
        required
        minLength={2}
        maxLength={30}
      />
      <span className="popup__input-error popup__input-error_type_name" />
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link"
        aria-label="Укажите ссылку."
        required
      />
      <span className="popup__input-error popup__input-error_type_link" />
      <button
        className="popup__submit-btn"
        type="submit"
        aria-label="Отправка формы."
      >
        Создать
      </button>
    </PopupWithForm>
  );
}
export default PlacePopup;

{
  /* <div className="popup popup_type_place">
        <div className="popup__container">
          <h2 className="popup__edit-form">Новое место</h2>
          <form
            name="place-form"
            className="popup__form popup__form_type_place"
            noValidate
          >
            <input
              name="name"
              type="text"
              placeholder="Название"
              className="popup__input popup__input_type_place"
              aria-label="Введите название места."
              required
              minLength={2}
              maxLength={30}
            />
            <span className="popup__input-error popup__input-error_type_name" />
            <input
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_link"
              aria-label="Укажите ссылку."
              required
            />
            <span className="popup__input-error popup__input-error_type_link" />
            <button
              className="popup__submit-btn"
              type="submit"
              aria-label="Отправка формы."
            >
              Создать
            </button>
          </form>
          <button
            className="popup__close-icon"
            type="button"
            aria-label="Закрыть форму."
          />
        </div>
      </div> */
}
