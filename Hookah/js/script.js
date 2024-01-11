
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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const prise = anchor.getAttribute('href').substr(1)
    
    document.getElementById(prise).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

  document.getElementById('open').addEventListener('click', function() {
    document.getElementById('popup').classList.add('show');
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('show');
});

document.querySelector('.popup__body').addEventListener('click', function(event) {
  if (event.target === this) {
      document.getElementById('popup').classList.remove('show');
  }
});