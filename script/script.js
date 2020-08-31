const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const editButton = profile.querySelector(".profile__editButton");
const closePopup = popup.querySelector(".popup__close");
const saveButton = popup.querySelector(".popup__button");
const userForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_proff");
const userName = document.querySelector(".profile__info-title");
const userProff = document.querySelector(".profile__info-subtitle");
const popupImg = document.querySelector('.popupImg');
const closePopupImg = document.querySelector('.popupImg__close');
const popupAdd = document.querySelector(".popupAdd");
const addButton = document.querySelector(".profile__addButton");
const closePopupAdd = document.querySelector(".popupAdd__close");
const saveButtonAdd = popupAdd.querySelector(".popupAdd__button");
const userFormAdd = document.querySelector(".popupAdd__form");
const image = document.querySelector('.popupImg__src');
const title = document.querySelector('.popupImg__title');
const cardList = document.querySelector(".card-list");
const name = document.querySelector('.popupAdd__input_type_name');
const link = document.querySelector('.popupAdd__input_type_link');
const cardTemplate = document.querySelector('#card-template').content;


function togglePopup(popup) {
  popup.classList.toggle("popup-open");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userProff.textContent = jobInput.value;

  togglePopup(popup);
}

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderCards() {
  initialCards.forEach(function(element) {
    addCard(element.link , element.name);

  })
}
renderCards();


function addCard(imgCard , nameCard ) {

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src= imgCard;
  cardElement.querySelector('.card__image').alt= nameCard;
  cardElement.querySelector('.card__name').textContent = nameCard;
  
  cardList.prepend(cardElement);


}

userFormAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard(link.value, name.value);

  name.value = '';
  link.value = '';
  togglePopup(popupAdd);
});

cardList.addEventListener('click', function(event) {
    const { target } = event;
    if (target.classList.contains("card__remove")) {
      cardList.removeChild(target.parentNode);
      return;
  }
  if (target.classList.contains('card__like-icon')){
      target.classList.toggle('card__liked');
      return;
  }
  if (target.classList.contains('card__image')) {
    const imageLink = event.target.getAttribute('src');
    const imageTitle = event.target.getAttribute('alt');
    image.src = `${imageLink}`;
    title.textContent = `${imageTitle}`;
    
    togglePopup(popupImg);
  }
})

userForm.addEventListener("submit", formSubmitHandler);

editButton.addEventListener("click", function() {
  nameInput.value = userName.textContent;
  jobInput.value = userProff.textContent;
  togglePopup(popup)
});
closePopup.addEventListener("click", function() {
  togglePopup(popup)
});
closePopupImg.addEventListener("click", function() {
  togglePopup(popupImg)
});
addButton.addEventListener("click", function() {
  togglePopup(popupAdd)
});
closePopupAdd.addEventListener("click", function() {
  togglePopup(popupAdd)
});

