let carrito = [];
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  mostrarCarrito();
}
function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    lista.innerHTML += `<li>${item.nombre} - $${item.precio.toFixed(2)} <button onclick="eliminarItem(${index})">❌</button></li>`;
  });
  document.getElementById('total').textContent = total.toFixed(2);
}
function eliminarItem(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}
function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
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
