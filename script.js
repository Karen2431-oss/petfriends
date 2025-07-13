let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElem = document.getElementById('total');
  listaCarrito.innerHTML = '';

  total = carrito.reduce((sum, item) => sum + item.precio, 0);

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
  });

  totalElem.textContent = `Total: $${total.toFixed(2)}`;
}
