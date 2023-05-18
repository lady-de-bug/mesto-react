import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfilePopup(props) {
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        className="popup__input popup__input_type_name"
        aria-label="Введите имя."
        required
        minLength={2}
        maxLength={40}
      />
      <span className="popup__input-error popup__input-error_type_name" />
      <input
        type="text"
        name="occupation"
        placeholder="О себе"
        className="popup__input popup__input_type_occupation"
        aria-label="Введите профессию."
        required
        minLength={2}
        maxLength={200}
      />
      <span className="popup__input-error popup__input-error_type_occupation" />
      <button
        className="popup__submit-btn"
        type="submit"
        aria-label="Отправка формы."
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
}
export default ProfilePopup

{
  /* <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__edit-form">Редактировать профиль</h2>
          <form
            name="profile-form"
            className="popup__form popup__form_type_profile"
            noValidate
          >
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="popup__input popup__input_type_name"
              aria-label="Введите имя."
              required
              minLength={2}
              maxLength={40}
            />
            <span className="popup__input-error popup__input-error_type_name" />
            <input
              type="text"
              name="occupation"
              placeholder="О себе"
              className="popup__input popup__input_type_occupation"
              aria-label="Введите профессию."
              required
              minLength={2}
              maxLength={200}
            />
            <span className="popup__input-error popup__input-error_type_occupation" />
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
