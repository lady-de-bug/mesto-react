import React from 'react';



function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__content">
          <div
            className="profile__avatar-button"
            onClick={props.onEditAvatar}
          >
            <img src="#" alt="#" className="profile__avatar" />
          </div>
          <div className="profile__info-section">
            <div className="profile__profile-info">
              <h1 className="profile__user-name">Жак-Ив Кусто</h1>
              <p className="profile__user-occupation">Исследователь океана</p>
            </div>
            <button
            onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Кнопка редактирования профиля."
            />
          </div>
        </div>
        <button
        onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Кнопка добавить данные."
        />
      </section>
      <section className="elements" aria-label="Фотографии мест России.">
        <template id="elementTemplate" />
      </section>
    </main>
  );
}
export default Main;
