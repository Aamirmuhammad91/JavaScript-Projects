// initialize counter
let count = 0;

//select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const target = e.currentTarget.classList;
    if (target.contains('decrease')) {
      --count;
    } else if (target.contains('increase')) {
      ++count;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  });
});
