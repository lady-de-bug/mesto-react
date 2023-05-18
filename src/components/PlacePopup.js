import React from 'react';
import PopupWithForm from './PopupWithForm';

function PlacePopup(props) {
  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
    </PopupWithForm>
  );
}
export default PlacePopup;
