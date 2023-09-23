"use strict";

// const prevBtn = document.getElementsByClassName("slider__left");
// const nextBtn = document.getElementsByClassName("slider__right");
// const slides = document.querySelectorAll(".slider__slide");
// let currentSlide = 0;

// function showSlide(index) {
//   slides[currentSlide].classList.remove("slider__active");
//   currentSlide = index;
//   slides[currentSlide].classList.add("slider__active");
// }

// prevBtn.addEventListener("click", () => {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// });

// nextBtn.addEventListener("click", () => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// });

// // Показать первый слайд при загрузке страницы
// showSlide(currentSlide);

const prevBtn = document.querySelector(".main__header");
// prevBtn.addEventListener("click", () => {
//   prevBtn.style.color = "red";
// });

if (prevBtn !== null) {
  // Выполняйте операции с элементом
} else {
  console.error("Элемент не найден");
}
