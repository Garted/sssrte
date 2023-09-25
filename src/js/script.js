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
