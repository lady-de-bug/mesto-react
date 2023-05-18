import React from 'react';
import PopupWithForm from './PopupWithForm';

function AvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
    </PopupWithForm>
  );
}
export default AvatarPopup;
