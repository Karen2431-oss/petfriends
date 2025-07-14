let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const producto = carrito.find(p => p.nombre === nombre);
  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
  document.getElementById("carrito").style.display = "block";
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  lista.innerHTML = "";

  let totalPrecio = 0;
  carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} x${p.cantidad} - $${(p.precio * p.cantidad).toFixed(2)}`;
    lista.appendChild(li);
    totalPrecio += p.precio * p.cantidad;
  });

  total.textContent = totalPrecio.toFixed(2);
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

<script>
  const bannerContainer = document.getElementById("bannerContainer");
  let index = 0;

  function slideBanner() {
    index = (index + 1) % 4} // 4 banners
    bannerContainer.style.transform = `translateX(-${index * 100}%)`;
  {}
  setInterval(slideBanner, 4000); // cambia cada 4 segundos
</script>
