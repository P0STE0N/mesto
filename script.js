let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");
let editButton = profile.querySelector(".profile__editButton");
let closePopup = popup.querySelector(".popup__close");
let saveButton = popup.querySelector(".popup__button");
let userForm = document.querySelector(".popup__form");

function exitPopup() {
  popup.style.display = "none";
}

function openPopup() {
  popup.style.display = "block";
}

editButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", exitPopup);

function formSubmitHandler(evt) {
  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = document.querySelector(".popup__input_type_name");
  let jobInput = document.querySelector(".popup__input_type_proff");

  nameInput = nameInput.value
  jobInput = jobInput.value
  // Получите значение полей из свойства value

  let userName = document.querySelector(".profile__info-title");
  let userProff = document.querySelector(".profile__info-subtitle");
   // Выберите элементы, куда должны быть вставлены значения полей

  userName.textContent = nameInput;
  userProff.textContent = jobInput;

  exitPopup();
  evt.preventDefault(); // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
userForm.addEventListener("submit", formSubmitHandler);
