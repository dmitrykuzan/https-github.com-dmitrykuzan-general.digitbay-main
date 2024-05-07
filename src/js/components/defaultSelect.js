import Choices from "choices.js";

export const defaultSelect = () => {
  const elements = document.querySelectorAll('.create__select');
  const multiple = document.querySelector('.create__tags')

  const choices = new Choices(multiple, {
        searchEnabled: false,
        removeItemButton: true,
  });

  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
    });
  })
}