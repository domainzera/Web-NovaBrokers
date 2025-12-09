document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nb-nav__link');

  if (toggle && menu) {
    // Toggle del menú hamburguesa
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar el menú al hacer clic en un enlace (solo en mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          menu.classList.remove('is-open');
          toggle.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });

    // Cerrar el menú al hacer clic fuera (solo en mobile)
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 768 && 
          menu.classList.contains('is-open') &&
          !menu.contains(e.target) &&
          !toggle.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }
});
