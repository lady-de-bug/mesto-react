import React from 'react';
import PopupWithForm from './PopupWithForm';

function AvatarPopup(props) {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose}>
      <input
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        className="popup__input popup__input_type_avatar"
        aria-label="Укажите ссылку."
        required
      />
      <span className="popup__input-error popup__input-error_type_avatar" />
      {/* <button
        className="popup__submit-btn"
        type="submit"
        aria-label="Отправка формы."
      >
        Сохранить
      </button> */}
    </PopupWithForm>
  );
}
export default AvatarPopup;
{
  /* <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__edit-form">Обновить аватар</h2>
          <form
            name="avatar-form"
            className="popup__form popup__form_type_avatar"
            noValidate
          >
            <input
              type="url"
              name="avatar"
              placeholder="Ссылка на аватар"
              className="popup__input popup__input_type_avatar"
              aria-label="Укажите ссылку."
              required
            />
            <span className="popup__input-error popup__input-error_type_avatar" />
            <button
              className="popup__submit-btn"
              type="submit"
              aria-label="Отправка формы."
            >
              Сохранить
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
