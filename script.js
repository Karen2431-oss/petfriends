let cart = [];
let total = 0;

function toggleCart() {
  const cartElement = document.getElementById('cart');
  cartElement.classList.toggle('cart-visible');
  cartElement.classList.toggle('cart-hidden');
}

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  document.getElementById('cart-count').textContent = cart.length;
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

function checkout() {
  // Lógica para proceder al pago
  alert('Procediendo al pago...');
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
