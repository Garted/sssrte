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

// Получаем все элементы с классом .item
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

document.addEventListener("DOMContentLoaded", function () {
  const showFitnessItems = document.querySelectorAll(".show-fitness");
  const cards = document.querySelectorAll(".fitness");

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
