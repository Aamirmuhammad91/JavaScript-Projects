const btns = document.querySelectorAll('.tab-btn');
const article = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (id) {
    //remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    article.forEach((item) => {
      item.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
