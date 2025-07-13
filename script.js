let carrito = [];
function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  alert(`${producto} agregado al carrito. Total: $${carrito.reduce((s, p) => s + p.precio, 0).toFixed(2)}`);
}

let bannerIndex = 0;

function cambiarSlide(direccion) {
  const container = document.getElementById('bannerContainer');
  const totalSlides = container.children.length;

  bannerIndex += direccion;

  if (bannerIndex < 0) bannerIndex = totalSlides - 1;
  if (bannerIndex >= totalSlides) bannerIndex = 0;

  container.style.transform = `translateX(-${bannerIndex * 100}%)`;
}
