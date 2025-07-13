let carrito = [];
function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  alert(`${producto} agregado al carrito. Total: $${carrito.reduce((s, p) => s + p.precio, 0).toFixed(2)}`);
}

let indice = 0;

function moverCarrusel(direccion) {
  const contenedor = document.querySelector('.carrusel-contenedor');
  const items = document.querySelectorAll('.categoria-item');

  if (!contenedor || items.length === 0) return;

  const visible = 1; // cuántos se muestran a la vez
  indice += direccion;

  if (indice < 0) indice = items.length - visible;
  if (indice > items.length - visible) indice = 0;

  const anchoItem = items[0].offsetWidth + 16; // 16px gap
  contenedor.style.transform = `translateX(${-indice * anchoItem}px)`;
}
