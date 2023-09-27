"use strict";

//СКРИПТ НА СЛАЙДЕР//

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".slider__slide");
let currentSlide = 0;
// Функция для отображения текущего слайда
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("slider__active");
    } else {
      slide.classList.remove("slider__active");
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
const cards = document.querySelectorAll(".catalog__item");
cards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

const wrap = document.querySelector(".catalog__wrap");

document.addEventListener("DOMContentLoaded", function () {
  const showFitnessItems = document.querySelectorAll(
    ".catalog__elem.show-fitness"
  );
  showFitnessItems.forEach(function (item) {
    item.addEventListener("click", function () {
      cards.forEach(function (card) {
        if (card.classList.contains("fitness")) {
          card.style.display = "block";
          wrap.style.justifyContent = "flex-start";
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
          wrap.style.justifyContent = "flex-start";
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
          wrap.style.justifyContent = "flex-start";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
