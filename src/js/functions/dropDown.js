export const dropDown = () => {
  document.addEventListener('click', e => {
    const clickedEl = e.target;
    const btn = clickedEl.closest('.navigation');

    if(btn) {
      btn.classList.toggle('active');
    };
  });

  window.addEventListener("click", (e) => {
    const clickedEl = e.target;
    if (!clickedEl.closest(".navigation")) {
      const activeBtn = document.querySelector(".navigation.active");
      if (activeBtn) {
        activeBtn.classList.remove("active");
      }
    }
  });
}

