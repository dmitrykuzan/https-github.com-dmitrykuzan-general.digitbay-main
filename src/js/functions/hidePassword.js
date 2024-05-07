export const hidePassword = () => {
  const wrapper = document.querySelector('.password__info-list');

  if(wrapper) {
    wrapper.addEventListener('click', function(e) {
      console.log(e.target)
      if(e.target.classList.contains('password__button-hide')) {
        if (e.target.previousElementSibling.getAttribute('type') == 'password') {
          e.target.classList.add('view');
          e.target.previousElementSibling.setAttribute('type', 'text');
        } else {
          e.target.classList.remove('view');
          e.target.previousElementSibling.setAttribute('type', 'password');
        }
      }
    })
  }
}
