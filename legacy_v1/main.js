// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      accordion.classList.toggle('expanded');
    });
  });

  // Hamburger menu toggle (already exists in your HTML)
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

