let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let totalPrecio = 0;
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    lista.appendChild(li);
    totalPrecio += item.precio;
  });
  total.textContent = totalPrecio.toFixed(2);
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function abrirCarrito() {
  document.getElementById('carrito-modal').classList.remove('hidden');
}

function cerrarCarrito() {
  document.getElementById('carrito-modal').classList.add('hidden');
}

document.querySelector('.acciones span').addEventListener('click', abrirCarrito);


<script>
  const bannerContainer = document.getElementById("bannerContainer");
  let index = 0;

  function slideBanner() {
    index = (index + 1) % 4} // 4 banners
    bannerContainer.style.transform = `translateX(-${index * 100}%)`;
  {}
  setInterval(slideBanner, 4000); // cambia cada 4 segundos
</script>
