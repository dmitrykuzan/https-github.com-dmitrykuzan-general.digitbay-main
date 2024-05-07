export const screenshotsSlider = () => {
  const sliderSwiper = document.querySelector('.screenshots__wrapper');
  const sliderWrapper = document.querySelector('.screenshots__list');
  const sliderSlide = document.querySelectorAll('.swiper-slide');

  if(sliderSwiper) {
    if(window.innerWidth <= 575) {
      let screenshotsSlider = new Swiper(".screenshots__wrapper", {
        slidesPerView: 1.1,
        spaceBetween: 16,
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