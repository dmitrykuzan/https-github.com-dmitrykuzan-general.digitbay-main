export const copyText = () => {
  const text = document.querySelector('.ticket__copy-input');
  const btn = document.querySelector('.ticket__copy-button');

  if(btn) {
    btn.addEventListener('click', () => {
      text.select();
      document.execCommand("copy");
      btn.classList.add('active');

      setTimeout(function() {
        btn.classList.remove('active');
      },1500)
    })
  }
}