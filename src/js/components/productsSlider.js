export const productsSlider = () => {
  const sliderSwiper = document.querySelector('.products__list');
  const sliderWrapper = document.querySelector('.products__list-wrapper');
  const sliderSlide = document.querySelectorAll('.products__item');

  if(sliderSwiper) {
    if(window.innerWidth <= 575) {
      let productsSlider = new Swiper(".products__list", {
        slidesPerView: 1.7,
        spaceBetween: 20,
        autoHeight: true,
        breakpoints: {
          475: {
              slidesPerView: 2.3,
              spaceBetween: 20,
          },
        },
      });
    } else {
      sliderWrapper.classList.remove('swiper-wrapper');
      sliderSwiper.classList.remove('swiper');
      sliderSlide.forEach(slide => {
        slide.classList.remove('swiper-slide');
      })
    }
  }
}