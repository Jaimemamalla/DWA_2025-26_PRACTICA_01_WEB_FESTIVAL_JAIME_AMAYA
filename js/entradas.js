// REDIRECCIÓN AL FINALIZAR COMPRA
const btnFinalizar = document.getElementById('finalizarCompra');
if (btnFinalizar) {
  btnFinalizar.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// COMPRAR ENTRADAS
const filasEntradas = document.querySelectorAll('.entradas__fila');

if (filasEntradas.length > 0) {
  const maxEntradas = 20;
  const minEntradas = 0;

  filasEntradas.forEach(fila => {
    const btnPlus = fila.querySelector('.entradas__btn--plus');
    const btnMinus = fila.querySelector('.entradas__btn--minus');
    const spanCount = fila.querySelector('.entradas__count');

    function actualizar(cantidad) {
      spanCount.textContent = cantidad;
      btnMinus.disabled = cantidad <= minEntradas;
      btnPlus.disabled = cantidad >= maxEntradas;
      actualizarResumenEntradas();
    }

    if (btnPlus && btnMinus) {
      btnPlus.addEventListener('click', () => {
        const current = +spanCount.textContent;
        actualizar(Math.min(maxEntradas, current + 1));
      });

      btnMinus.addEventListener('click', () => {
        const current = +spanCount.textContent;
        actualizar(Math.max(minEntradas, current - 1));
      });
    }
  });

  // FUNCIÓN: ACTUALIZAR RESUMEN DEL PEDIDO (DERECHA)
  function actualizarResumenEntradas() {
    const resumenDerecha = document.querySelector('.checkout__right .summary');
    if (!resumenDerecha) return;

    let total = 0;
    let entradasSeleccionadas = [];

    document.querySelectorAll('.entradas__fecha').forEach(fechaBloque => {
      const fecha = fechaBloque.dataset.fecha;
      const filasActivas = Array.from(fechaBloque.querySelectorAll('.entradas__fila'))
        .filter(f => +f.querySelector('.entradas__count').textContent > 0);

      if (filasActivas.length === 0) return;

      filasActivas.forEach(fila => {
        const tipo = fila.dataset.tipo;
        const precio = +fila.dataset.precio;
        const qty = +fila.querySelector('.entradas__count').textContent;
        const subtotal = qty * precio;
        total += subtotal;

        entradasSeleccionadas.push(`${qty}× ${tipo}`);
      });
    });

    // Actualizar texto del resumen derecho
    const campoEntradas = resumenDerecha.querySelector('.summary__field:nth-child(2) span:last-child');
    const campoSubtotal = resumenDerecha.querySelector('.summary__field:nth-child(3) span:last-child');
    const campoTotal = resumenDerecha.querySelector('.summary__field--total span:last-child');

    if (campoEntradas) campoEntradas.textContent = entradasSeleccionadas.length > 0 ? entradasSeleccionadas.join(', ') : '—';
    if (campoSubtotal) campoSubtotal.textContent = `${total.toLocaleString()} ARG$`;
    if (campoTotal) campoTotal.textContent = `${total.toLocaleString()} ARG$`;
  }

  actualizarResumenEntradas();
}
