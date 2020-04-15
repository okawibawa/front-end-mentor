const body = document.getElementById('body');
const toggle = document.getElementById('checkbox');

toggle.addEventListener('click', () => {
  if (toggle.checked === true) {
    body.classList.add('light');
  } else {
    body.classList.remove('light');
  }
});
