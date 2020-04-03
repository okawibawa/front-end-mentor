const form = document.getElementById('form');
const email = document.getElementById('email');
const small = document.getElementById('error');

const smallParent = small.parentNode.parentNode;

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailValue = email.value;

  if (!emailValue) {
    smallParent.classList.add('error');
    small.innerText = 'Please insert an email address';
  } else if (!isValid(emailValue)) {
    smallParent.classList.add('error');
    small.innerText = 'Please insert a valid email address';
  } else {
    smallParent.classList.remove('error');
    small.innerText = '';
  }
});

function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
