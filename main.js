  // Initialize ScrollReveal

  // Fonction pour vérifier si l'élément est visible dans la fenêtre de visualisation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150; // Point où l'animation commence

      if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
      } else {
          element.classList.remove('active');
      }
  });
}

// Ajout d'un écouteur d'événement pour le défilement
window.addEventListener('scroll', revealOnScroll);

// Exécute la fonction une fois au chargement pour vérifier si certains éléments sont déjà visibles
revealOnScroll();




 