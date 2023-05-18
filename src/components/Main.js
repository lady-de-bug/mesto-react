import React from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        // console.log(res);
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-button" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="#" className="profile__avatar" />
          </div>
          <div className="profile__info-section">
            <div className="profile__profile-info">
              <h1 className="profile__user-name">{userName}</h1>
              <p className="profile__user-occupation">{userDescription}</p>
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
