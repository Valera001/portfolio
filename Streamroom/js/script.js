document.querySelector('#header__burger-btn-open').addEventListener("click",function(){
  document.querySelector('#header__burger-nav').classList.remove('close-div')
});
document.querySelector('#header__burger-nav-close').addEventListener("click",function(){
  document.querySelector('#header__burger-nav').classList.add('close-div')
});


new Swiper('.intro-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  });


document.querySelector('#gallery-more-btn').addEventListener("click", function(){

  if (document.querySelector('#last-works-gallery-more').classList.toggle('last-works__gallery-more')) { 
      document.querySelector('#gallery-more-btn').textContent = 'LOAD MORE';
  }
    else{
      document.querySelector('#gallery-more-btn').textContent = 'HIDE';
    };
});


new Swiper('.clients-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },

      840: {
        slidesPerView: 5,
        spaceBetween: 60,
      },

      1080: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    }
    
});



