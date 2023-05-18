import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopUpWithSubmit from './PopupWithSubmit';
import ProfilePopup from './ProfilePopup';
import PlacePopup from './PlacePopup';
import AvatarPopup from './AvatarPopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setIsOpen(!isOpen);
    // document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    setIsOpen(!isOpen);
    // document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    setIsOpen(!isOpen);
    // document.querySelector('.popup_type_place').classList.add('popup_opened');
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <ImagePopup onClose={closeAllPopups}/>
      <ProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopUpWithSubmit onClose={closeAllPopups}/>
      <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
