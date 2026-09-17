// Realce do link de navegação conforme a seção visível
const sections = document.querySelectorAll('main section[id], section[id]');
const navLinks = document.querySelectorAll('.nav a');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('is-active', isCurrent);
          link.setAttribute('aria-current', isCurrent ? 'location' : 'false');
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}
