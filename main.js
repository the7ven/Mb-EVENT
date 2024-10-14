  // Initialize ScrollReveal
  ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });

  // Reveal elements
  ScrollReveal().reveal('.hero h1, .hero h3, .hero .btn1', { delay: 500, origin: 'left', interval: 200 });
  ScrollReveal().reveal('.about h1, .about-text', { delay: 500, origin: 'bottom' });
  ScrollReveal().reveal('.about-pic1, .about-pic2, .about-pic3', { delay: 600, origin: 'right', interval: 200 });
  ScrollReveal().reveal('.services-container h2', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.service-card', { delay: 500, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.cocktail-section h1', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.product', { delay: 600, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.contact h1', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.contact form', { delay: 600, origin: 'bottom' });
  ScrollReveal().reveal('footer', { delay: 500, origin: 'bottom' });




  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show"); }