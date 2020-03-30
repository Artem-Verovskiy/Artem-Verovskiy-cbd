var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    // loopedSlides: 1,
    // loop: true,
    spaceBetween: 0,
    // freeMode: true,
    // centeredSlides: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })