let carrito = [];
function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  alert(`${producto} agregado al carrito. Total: $${carrito.reduce((s, p) => s + p.precio, 0).toFixed(2)}`);
}

<script>
  const bannerContainer = document.getElementById("bannerContainer");
  let index = 0;

  function slideBanner() {
    index = (index + 1) % 4; // 4 banners
    bannerContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(slideBanner, 4000); // cambia cada 4 segundos
</script>
