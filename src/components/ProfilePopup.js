import React from 'react';
import PopupWithForm from './PopupWithForm';

function ProfilePopup(props) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
    </PopupWithForm>
  );
}
export default ProfilePopup;
