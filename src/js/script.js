"use strict";

// Connecting vendors (plugins)
import "./_vendor";
import "fslightbox";

// Functions
import { burger, dynamicAdaptive, mobileCheck, tabs, readMore, dropDown, copyText, hidePassword } from "./functions/";

// Components
import { productsSlider, heroSlider, discountSlider, reviewSlider, screenshotsSlider, toolBar, defaultSelect } from "./components/";


window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  heroSlider();
  burger();
  dynamicAdaptive();
  productsSlider();
  discountSlider();
  reviewSlider();
  tabs('.store__wrapper', '.store__button', '.store__list', 'active');
  tabs('.requirement__wrapper', '.requirement__button', '.requirement__body', 'active');
  tabs('.comment__wrapper', '.comment__button', '.comment__list', 'active');
  tabs('.main__graph-content', '.main__statistic-button', '.main__graph-wrapper', 'active');
  tabs('.create__tabs', '.create__tabs-navigation-btn', '.create__tabs-content', 'active')
  screenshotsSlider();
  readMore();
  dropDown();
  copyText();
  hidePassword();
  toolBar();
  defaultSelect();
});
