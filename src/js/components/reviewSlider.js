export const reviewSlider = () => {
  let reviewSlider = new Swiper(".review__slider", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    autoHeight: true,
    breakpoints: {
      575: {
        slidesPerView: 2,
      },
      1850: {
        spaceBetween: 20,
        simulateTouch: true,
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 2,
      },
    },

    pagination: {
      el: ".review__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".review__button--next",
      prevEl: ".review__button--prev",
    },
  });
};
