let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");
let editButton = profile.querySelector(".profile__editButton");
let closePopup = popup.querySelector(".popup__close");
let saveButton = popup.querySelector(".popup__button");
let userForm = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_proff");
let userName = document.querySelector(".profile__info-title");
let userProff = document.querySelector(".profile__info-subtitle");
let popupImg = document.querySelector('.popupImg');
let bigImage = document.querySelector('.popup__content_img');
let closePopupImg = document.querySelector('.popupImg__close');
let cardElement = document.querySelector('.card');
let popupAdd = document.querySelector(".popupAdd");
let addButton = document.querySelector(".profile__addButton");
let closePopupAdd = document.querySelector(".popupAdd__close");
let saveButtonAdd = popupAdd.querySelector(".popupAdd__button");
let userFormAdd = document.querySelector(".popupAdd__form");
let nameInputAdd = document.querySelector(".popupAdd__input_type_name");
let linkInputAdd = document.querySelector(".popupAdd__input_type_link");
let cardImg = document.querySelector(".card__image");
let image = document.querySelector('.popupImg__src');
let title = document.querySelector('.popupImg__title');
let titleCard = document.querySelector('.card__name');
let cardList = document.querySelector(".card-list");

function exitPopup() {
  popup.classList.remove("popup-open");
}

function openPopup() {
  popup.classList.add("popup-open");
  nameInput.value = userName.textContent;
  jobInput.value = userProff.textContent;
}

function exitPopupImg() {
  popupImg.classList.remove("popup-open");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userProff.textContent = jobInput.value;

  exitPopup();
}


function exitPopupAdd() {
  popupAdd.classList.remove("popup-open");
  
}
function openPopupAdd() {
  popupAdd.classList.add("popup-open");
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
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const removeContainer = document.createElement('button');
  removeContainer.classList.add('card__remove');

  const imgContainer = document.createElement('img');
  imgContainer.classList.add('card__image');
  imgContainer.src= imgCard;
  imgContainer.alt= nameCard;

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('card__description');

  const nameContainer = document.createElement('h2');
  nameContainer.classList.add('card__name');
  nameContainer.textContent = nameCard;

  const likeContainer = document.createElement('button');
  likeContainer.classList.add('card__like-icon');

  descriptionContainer.append(nameContainer, likeContainer );
  cardContainer.append(removeContainer , imgContainer , descriptionContainer);
  
  cardList.prepend(cardContainer);


}

userFormAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const name = document.querySelector('.popupAdd__input_type_name');
  const link = document.querySelector('.popupAdd__input_type_link');

  addCard(link.value, name.value);

  name.value = '';
  link.value = '';
  exitPopupAdd();
});

cardList.addEventListener('click', function(event) {
  let target = event.target;
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
    
    popupImg.classList.add('popup-open'); 
  }
})


userForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", exitPopup);
closePopupImg.addEventListener("click", exitPopupImg);
saveButtonAdd.addEventListener("click", userFormAdd);
addButton.addEventListener("click", openPopupAdd);
closePopupAdd.addEventListener("click", exitPopupAdd);

