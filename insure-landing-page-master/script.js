const navToggle = () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLink = document.querySelector('.nav-mobile');
  const navBar = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('hidden');
    navBar.classList.toggle('nav-toggle');
    navLink.classList.toggle('nav-active');
  });
};

navToggle();
