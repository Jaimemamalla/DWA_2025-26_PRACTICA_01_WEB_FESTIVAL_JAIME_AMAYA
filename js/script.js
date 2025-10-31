//MENU HAM

const burger = document.querySelector('.burger i');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
});

//MODAL 

let btnsOpenModal = document.querySelectorAll(".btn-comprar");
let modalWindow = document.querySelector("#modalWindow");
let btnCloseModal = document.querySelector("#modalWindow > .modal-content > .close");
let btnCloseModalAccept = document.querySelector("#modalWindow > .modal-content > #closeModalAccept");
let ticketTexto = document.querySelector("#ticket-seleccionado");
let cantidadInput = document.querySelector("#cantidad");
let precioTotal = document.querySelector("#precio-total");

// Mapeo de precios
const precios = {
  "Entrada Normal": 50,
  "Entrada VIP": 90,
  "Full Pass": 150
};

let tipoSeleccionado = null;

// Asignar evento a todos los botones "Comprar"
btnsOpenModal.forEach(function(boton) {
  boton.addEventListener("click", function() {
      tipoSeleccionado = boton.dataset.ticket;
      openModalWindow();
  });
});

// Función para abrir ventana modal
function openModalWindow() {
  ticketTexto.textContent = `Has seleccionado: ${tipoSeleccionado}`;
  cantidadInput.value = 1;
  actualizarPrecio();
  modalWindow.classList.add("show-modal");
}

// Función para cerrar ventana modal
function closeModalWindow() {
  modalWindow.classList.remove("show-modal");
}

// Cerrar con la X o al confirmar pago
btnCloseModal.addEventListener("click", closeModalWindow);
btnCloseModalAccept.addEventListener("click", function(event) {
  event.preventDefault();
  const cantidad = parseInt(cantidadInput.value);
  const total = precios[tipoSeleccionado] * cantidad;
  alert(`🎟️ Compra realizada:\n${cantidad} x ${tipoSeleccionado}\nTotal: ${total}€`);
  closeModalWindow();
});

// Cerrar ventana modal al hacer clic fuera
window.addEventListener("click", function(event) {
  if (event.target == modalWindow) {
      closeModalWindow();
  }
});

// Actualizar el precio al cambiar cantidad
cantidadInput.addEventListener("input", actualizarPrecio);

function actualizarPrecio() {
  const cantidad = parseInt(cantidadInput.value) || 1;
  const total = precios[tipoSeleccionado] * cantidad;
  precioTotal.textContent = `${total}€`;
}