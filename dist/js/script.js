'use strict';

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slider__slide');
картинкой;
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('slider__active');
            класс;
        } else {
            slide.classList.remove('slider__active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

const items = document.querySelectorAll('.catalog__elem');

items.forEach((item) => {
    item.addEventListener('click', () => {
        items.forEach((otherItem) => {
            otherItem.classList.remove('catalog__elem_active');
        });
        item.classList.add('catalog__elem_active');
    });
});

const wrap = document.querySelector('.catalog__wrap');
const cards = document.querySelectorAll('.catalog__item');
document.addEventListener('DOMContentLoaded', function () {
    const showFitnessItems = document.querySelectorAll(
        '.catalog__elem.show-fitness'
    );
    showFitnessItems.forEach(function (item) {
        item.addEventListener('click', function () {
            cards.forEach(function (card) {
                if (card.classList.contains('fitness')) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const showRunningItems = document.querySelectorAll(
        '.catalog__elem.show-running'
    );
    showRunningItems.forEach(function (item) {
        item.addEventListener('click', function () {
            cards.forEach(function (card) {
                if (card.classList.contains('running')) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const showTriatlonItems = document.querySelectorAll(
        '.catalog__elem.show-triatlon'
    );
    showTriatlonItems.forEach(function (item) {
        item.addEventListener('click', function () {
            cards.forEach(function (card) {
                if (card.classList.contains('triatlon')) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

const moreButtons = document.querySelectorAll('.catalog__more');
moreButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        const card = this.closest('.catalog__item');
        card.classList.toggle('flipped');
    });

    button
        .closest('.catalog__item')
        .addEventListener('click', function (event) {
            event.stopPropagation();
        });
});

const overlay = document.querySelector('.overlay');
const orderCall = document.querySelectorAll('.orderbtn');
const croses = document.querySelectorAll('.modal__cross');
const modals = document.querySelectorAll('.modal');
const buyButton = document.querySelectorAll('.catalog__button');

function openModal() {
    overlay.style.display = 'block';
}
function closeModal() {
    overlay.style.display = 'none';
}

function showOrder() {
    modals.forEach(function (modal) {
        if (modal.classList.contains('order')) {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }
    });
}

function showBuy() {
    modals.forEach(function (modal) {
        if (modal.classList.contains('buy')) {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }
    });
}

buyButton.forEach(function (buy) {
    buy.addEventListener('click', function () {
        openModal();
        showBuy();
    });
});

orderCall.forEach(function (order) {
    order.addEventListener('click', function () {
        openModal();
        showOrder();
    });
});

croses.forEach(function (cross) {
    cross.addEventListener('click', function () {
        closeModal();
    });
});

window.addEventListener('click', function (event) {
    if (event.target == overlay) {
        closeModal();
    }
});
