export const readMore = () => {
  const hide = document.querySelector('.product__hide');
  const btn = document.querySelector('.product__button-read');

  if(hide) {
    const show = function() {
      if(hide.classList.contains('hide')) {
        hide.classList.remove('hide');
        btn.classList.remove('product__button-read--shadow')
        btn.innerText = 'Скрыть'
      } else {
        hide.classList.add('hide');
        btn.classList.add('product__button-read--shadow');
        btn.innerText = 'Показать все'
      }
    }
    btn.addEventListener('click', show);
  }
}