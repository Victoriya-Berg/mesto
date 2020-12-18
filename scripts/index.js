let overlayPopup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = overlayPopup.querySelector('.popup__close-btn');
let saveButton = overlayPopup.querySelector('.profile__save-btn');

let togglePopup = () => {
  overlayPopup.classList.toggle('popup_opened');
};

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

overlayPopup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    togglePopup();
  }
});

let form = overlayPopup.querySelector('.popup__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let profileName = document.querySelector('.profile__info-name');
  let profileDescription = document.querySelector('.profile__info-description');
  let editName = overlayPopup.querySelector('.popup__name');
  let editDescription = overlayPopup.querySelector('.popup__description');
  profileName.textContent = `${editName.value}`;
  profileDescription.textContent = `${editDescription.value}`;
  togglePopup();
});