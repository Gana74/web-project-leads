//burger//


let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menulinks = document.querySelectorAll(".nav__link-menu");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");
  }
);

//accordion//

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 400,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
  });
});


//swiper//

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  longSwipes: false,
  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// toogle class//
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const hiddenParagraphs = document.querySelectorAll(".hidden-paragraph");

  let isExpanded = false;

  toggleButton.addEventListener("click", () => {
    // Переключаем состояние
    isExpanded = !isExpanded;

    // Показываем/скрываем параграфы
    hiddenParagraphs.forEach((paragraph) => {
      paragraph.style.display = isExpanded ? "block" : "none";
    });

    // Меняем текст на кнопке
    toggleButton.textContent = isExpanded ? "Скрыть" : "Читать больше";

    // Меняем стиль кнопки
    toggleButton.classList.toggle("expanded", isExpanded);
  });
});
