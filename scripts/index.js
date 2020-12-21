let overlayPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__info-name');
let profileDescription = document.querySelector('.profile__info-description');
let closeButton = overlayPopup.querySelector('.popup__close-btn');
let saveButton = overlayPopup.querySelector('.profile__save-btn');
let editName = overlayPopup.querySelector('.popup__form-item_type_name');
let editDescription = overlayPopup.querySelector('.popup__form-item_type_description');
let form = overlayPopup.querySelector('.popup__form');

let addPopup = () => {
  overlayPopup.classList.add('popup_opened');
  editName.textContent = profileName.value;
  editDescription.textContent = profileDescription.value;
};
let closePopup = () => {
  overlayPopup.classList.remove('popup_opened');
};

editButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', closePopup);

overlayPopup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  closePopup();
});