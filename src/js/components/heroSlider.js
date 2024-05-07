export const heroSlider = () => {
  let heroSlider = new Swiper(".hero__slider", {
    slidesPerView: 1,
    spaceBetween: 1000,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero__slider-next",
      prevEl: ".hero__slider-prev",
    }
  });
}