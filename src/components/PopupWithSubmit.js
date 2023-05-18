import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupWithSubmit(props) {
  return (
    <PopupWithForm
      name="submit"
      title="Вы уверены?"
      buttonText="Да"
      onClose={props.onClose}
    />
  );
}
export default PopupWithSubmit;

{
  /* <div className="popup popup_type_submit">
        <div className="popup__container">
          <h2 className="popup__edit-form">Вы уверены?</h2>
          <form
            name="submit-form"
            className="popup__form popup__form_type_submit"
            noValidate
          >
            <button
              className="popup__submit-btn"
              type="submit"
              aria-label="Отправка формы."
            >
              Да
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
