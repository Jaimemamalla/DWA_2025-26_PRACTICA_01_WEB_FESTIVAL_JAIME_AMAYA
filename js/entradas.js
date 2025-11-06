
const summary = document.querySelector('.entradas__summary');
const filas = document.querySelectorAll('.entradas__fila');
const maxEntradas = 20;
const minEntradas = 0;

// Actualizar cantidad y resumen
filas.forEach(fila => {
  const btnPlus = fila.querySelector('.entradas__btn--plus');
  const btnMinus = fila.querySelector('.entradas__btn--minus');
  const spanCount = fila.querySelector('.entradas__count');

  function actualizar(cantidad) {
    spanCount.textContent = cantidad;
    btnMinus.disabled = cantidad <= minEntradas;
    btnPlus.disabled = cantidad >= maxEntradas;
    actualizarResumen();
  }

  btnPlus.addEventListener('click', () => {
    const current = +spanCount.textContent;
    actualizar(Math.min(maxEntradas, current + 1));
  });

  btnMinus.addEventListener('click', () => {
    const current = +spanCount.textContent;
    actualizar(Math.max(minEntradas, current - 1));
  });
});

function actualizarResumen() {
  const cont = document.querySelector('.entradas__summary-items');
  cont.innerHTML = '';
  let total = 0;

  document.querySelectorAll('.entradas__fecha').forEach(fechaBloque => {
    const fecha = fechaBloque.dataset.fecha;
    const filasActivas = Array.from(fechaBloque.querySelectorAll('.entradas__fila'))
      .filter(f => +f.querySelector('.entradas__count').textContent > 0);

    if (filasActivas.length === 0) return;

    const diaEl = document.createElement('div');
    diaEl.className = 'entradas__summary-date';
    diaEl.textContent = `Entradas para ${fecha}`;
    cont.append(diaEl);

    filasActivas.forEach(fila => {
      const tipo = fila.dataset.tipo;
      const precio = +fila.dataset.precio;
      const qty = +fila.querySelector('.entradas__count').textContent;
      total += qty * precio;

      const lineEl = document.createElement('div');
      lineEl.className = 'entradas__summary-line';
      lineEl.innerHTML = `
        <span>${tipo}</span>
        <span>${qty} × ${precio.toLocaleString()} ARG$</span>
      `;
      cont.append(lineEl);
    });
  });

  document.querySelector('.entradas__summary-total span').textContent = `${total.toLocaleString()} ARG$`;

  if (total > 0) {
    summary.classList.add('entradas__summary--visible');
  } else {
    summary.classList.remove('entradas__summary--visible');
  }
}

actualizarResumen();