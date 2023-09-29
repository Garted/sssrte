"use strict";

//СКРИПТ НА СЛАЙДЕР//

//определяем на какие элементы мы будем взаимодействовать
const prevBtn = document.getElementById("prevBtn"); //кнопка
const nextBtn = document.getElementById("nextBtn"); //кнопка
const slides = document.querySelectorAll(".slider__slide"); //блок с картинкой
let currentSlide = 0; // Функция для отображения текущего слайда

function showSlide(index) {
  //создаем функцию с аргументом index
  slides.forEach((slide, i) => {
    //метод для каждого элемента с классом slider__slide
    if (i === index) {
      //условие если там есть элемент с классом slider__slide
      slide.classList.add("slider__active"); //добавляем ему еще один класс
    } else {
      //если нет
      slide.classList.remove("slider__active"); //убираем класс
    }
  });
}
// Обработчик клика на кнопку "Следующий слайд"
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
// Обработчик клика на кнопку "Предыдущий слайд"
prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);

//СКРИПТ НА СЛАЙДЕР ОКОНЧАНИЕ//

//СКРИПТ НА СМЕНУ КЛАССА ТАБОВ//
const items = document.querySelectorAll(".catalog__elem");
// Добавляем обработчик события click к каждому элементу
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((otherItem) => {
      otherItem.classList.remove("catalog__elem_active");
    });
    item.classList.add("catalog__elem_active");
  });
});

// КОНЕЦ СКРИПТА НА СМЕНУ КЛАССА ТАБОВ//

//СКРИПТ НА НАЖАТИЕ ТАБА И ОТОБРАЖЕНИЕ ОПРЕДЕЛЕННЫХ КАРТОЧЕК//
const wrap = document.querySelector(".catalog__wrap");
const cards = document.querySelectorAll(".catalog__item");
document.addEventListener("DOMContentLoaded", function () {
  const showFitnessItems = document.querySelectorAll(
    ".catalog__elem.show-fitness"
  );
  showFitnessItems.forEach(function (item) {
    item.addEventListener("click", function () {
      cards.forEach(function (card) {
        if (card.classList.contains("fitness")) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const showRunningItems = document.querySelectorAll(
    ".catalog__elem.show-running"
  );
  showRunningItems.forEach(function (item) {
    item.addEventListener("click", function () {
      cards.forEach(function (card) {
        if (card.classList.contains("running")) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const showTriatlonItems = document.querySelectorAll(
    ".catalog__elem.show-triatlon"
  );
  showTriatlonItems.forEach(function (item) {
    item.addEventListener("click", function () {
      cards.forEach(function (card) {
        if (card.classList.contains("triatlon")) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
// ОКОНЧАНИЕ СКРИПТА НА НАЖАТИЕ ТАБА И ОТОБРАЖЕНИЕ ОПРЕДЕЛЕННЫХ КАРТОЧЕК//

//СКРИПТ НА ПОВОРОТ КАРТОЧЕК//

const moreButtons = document.querySelectorAll(".catalog__more");
moreButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события клика на карточку
    const card = this.closest(".catalog__item"); // Находим ближайшую карточку, содержащую кнопку
    card.classList.toggle("flipped");
  });
  // Добавляем обработчик клика на всю карточку, чтобы он не вызывал переворот при клике на другие элементы внутри карточки
  button.closest(".catalog__item").addEventListener("click", function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события клика на карточку
  });
});

//КОНЕЦ СКРИПТА НА ПОВОРОТ КАРТОЧЕК//

const overlay = document.querySelector(".overlay");
const orderCall = document.querySelectorAll(".orderbtn");
const croses = document.querySelectorAll(".modal__cross");
const modals = document.querySelectorAll(".modal");
const buyButton = document.querySelectorAll(".catalog__button");

function openModal() {
  overlay.style.display = "block";
}
function closeModal() {
  overlay.style.display = "none";
}

function showOrder() {
  modals.forEach(function (modal) {
    if (modal.classList.contains("order")) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
}

function showBuy() {
  modals.forEach(function (modal) {
    if (modal.classList.contains("buy")) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
}

buyButton.forEach(function (buy) {
  buy.addEventListener("click", function () {
    openModal();
    showBuy();
  });
});

orderCall.forEach(function (order) {
  order.addEventListener("click", function () {
    openModal();
    showOrder();
  });
});

croses.forEach(function (cross) {
  cross.addEventListener("click", function () {
    closeModal();
  });
});

window.addEventListener("click", function (event) {
  if (event.target == overlay) {
    closeModal();
  }
});
