//MENU HAM

const burger = document.querySelector('.burger i');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
});

//MODAL 

// MODAL PAGO
const modal = document.getElementById('modal-pago');
const closeModal = document.querySelector('.close');
const ticketTexto = document.getElementById('ticket-seleccionado');
const formPago = document.getElementById('form-pago');

// ABRIR MODAL
document.querySelectorAll('.btn-comprar').forEach(btn => {
  btn.addEventListener('click', () => {
    const tipo = btn.dataset.ticket;
    ticketTexto.textContent = `Has seleccionado: ${tipo}`;
    modal.style.display = 'flex';
  });
});

// CERRAR MODAL
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// CERRAR AL HACER CLICK FUERA DEL MODAL
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// OKEY DE COMPRA
formPago.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Compra realizada con éxito! 🎟️');
  modal.style.display = 'none';
  formPago.reset();
});
