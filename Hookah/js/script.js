
new Swiper('.swiper', {
  // slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        400: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }
  });