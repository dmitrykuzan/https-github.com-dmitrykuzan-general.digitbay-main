export const discountSlider = () => {
  const sliderSwiper = document.querySelector('.products__list--discount');
  const sliderWrapper = document.querySelector('.products__list-wrapper--discount');
  const sliderSlide = document.querySelectorAll('.products__item--discount');

  if(sliderSwiper) {
    if(window.innerWidth <= 575) {
      let productsSlider = new Swiper(".products__list--discount", {
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