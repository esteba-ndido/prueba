// Toggle menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
const dropdownLi = document.querySelector('nav ul li.has-dropdown');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  navUl.classList.toggle('active');
});

// Permitir abrir/cerrar dropdown en móvil con click
dropdownLi.addEventListener('click', e => {
  if(window.innerWidth <= 768) {
    e.preventDefault();
    dropdownLi.classList.toggle('active');
    const link = dropdownLi.querySelector('a');
    const expanded = link.getAttribute('aria-expanded') === 'true' || false;
    link.setAttribute('aria-expanded', !expanded);
  }
});

// Accesibilidad: abrir dropdown con teclado (Enter o Space)
dropdownLi.addEventListener('keydown', e => {
  if((e.key === 'Enter' || e.key === ' ') && window.innerWidth <= 768) {
    e.preventDefault();
    dropdownLi.classList.toggle('active');
    const link = dropdownLi.querySelector('a');
    const expanded = link.getAttribute('aria-expanded') === 'true' || false;
    link.setAttribute('aria-expanded', !expanded);
  }
});
