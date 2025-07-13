let carrito = [];
function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  alert(`${producto} agregado al carrito. Total: $${carrito.reduce((s, p) => s + p.precio, 0).toFixed(2)}`);
}
