// По поводу гит хаба не понимаю в чем проблема , стили не подгружаются.
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

function exitPopup() {
  popup.style.display = "none";
}

function openPopup() {
  popup.style.display = "block";
  nameInput.value = userName.textContent;
  jobInput.value = userProff.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userProff.textContent = jobInput.value;

  exitPopup();
}

userForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", exitPopup);
