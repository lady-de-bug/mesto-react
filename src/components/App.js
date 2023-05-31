import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopUpWithSubmit from './PopupWithSubmit';
import ProfilePopup from './ProfilePopup';
import PlacePopup from './PlacePopup';
import AvatarPopup from './AvatarPopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setIsOpen(!isOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    setIsOpen(!isOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    setIsOpen(!isOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onCardClick={handleCardClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <ProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
          <PlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <PopUpWithSubmit onClose={closeAllPopups} />
          <AvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
