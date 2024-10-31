const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');

function openModal(productElement) {
    const productImage = productElement.querySelector('.product-image');
    const productTitle = productElement.querySelector('h3');
    const productPrice = productElement.querySelector('p');

    // Mettre à jour le contenu de la modale
    modalImage.src = productImage.src;
    document.querySelector('.modal-details .product-title').textContent = productTitle.textContent;
    document.querySelector('.modal-details .product-price').textContent = productPrice.textContent;

    modal.classList.add('active');
    // Empêcher le défilement du body
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    // Réactiver le défilement du body
    document.body.style.overflow = 'auto';
}

// Fermer la modale en cliquant en dehors
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fermer la modale avec la touche Echap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});