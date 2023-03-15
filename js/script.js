// header start
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// header end

// swiper js
var swiper = new Swiper(".course-slider", {
    loop: true,
    // grabCursor: true,
    // spaceBetween: 20,
    // centeredSlides: true,
    // slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
    clickable: true, 
    },
    breakpoints: {
        550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      keyboard: {
        enabled: true,
      },
  });