//MENU HAM

const burger = document.querySelector('.burger i');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
});

//MODAL 
let modal = document.getElementById("miModal");
let btnCerrar = document.getElementById("cerrarModal");
let btnIrPago = document.getElementById("btnIrPago");
let tituloModal = document.getElementById("tituloModal");
let textoModal = document.getElementById("textoModal");

//TODOS LOS BTNS
let botonesComprar = document.querySelectorAll(".btn-comprar");

//CLICK BTNS 
botonesComprar.forEach(function(boton) {
  boton.addEventListener("click", function() {
    
    let tipoEntrada = boton.getAttribute("data-ticket");

    tituloModal.textContent = "Confirmar compra - " + tipoEntrada;
    textoModal.textContent = 'Estás a punto de comprar la "' + tipoEntrada + '". ¿Querés continuar al pago?';

    //MODAL ON
    modal.style.display = "flex";
  });
});

//CERRAR MODAL X
btnCerrar.onclick = function() {
  modal.style.display = "none";
}

//CERRAR FUERA DE LA CAJA MODAL
window.onclick = function(evento) {
  if (evento.target == modal) {
    modal.style.display = "none";
  }
}

//BTN PAGO
btnIrPago.onclick = function() {
  window.location.href = "entradas.html";
};

//CONTADOR CARACTERES FORMULARIO
let mensaje = document.getElementById("mensaje");
let contador = document.getElementById("contador");

mensaje.addEventListener("input", function() {
  let actual = mensaje.value.length;
  contador.textContent = actual + " / 300";
});

