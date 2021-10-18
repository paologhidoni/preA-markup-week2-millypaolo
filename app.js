const toggleBtn = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.navbar-links').firstElementChild;


// Sandwich menu functionality on smaller devices

toggleBtn.addEventListener('click', () => {

  // expands sandwich menu when clicked
  toggleBtn.classList.toggle('active');
  navbarLinks.classList.toggle('active');

  // lets disabled users know the menu is either expanded or collapsed
  if(toggleBtn.classList.contains('active')) {
    toggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

})