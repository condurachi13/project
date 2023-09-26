function clearArray() {
  localStorage.removeItem('cart');
  updateCartTotalItems();
  getCheckoutItemsAndTotal();
  checkoutSummary();  
}

function addItemToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productToAdd = produse.find((product) => product.id === productId);
  const existingProduct = cart.find((cartProduct) => cartProduct.id === productId);

  let productQuantity = parseInt(document.getElementById("quantity").value, 10);
  if (isNaN(productQuantity)) {
    productQuantity = 1;
  }

  if (existingProduct) {
    existingProduct.quantity = parseInt(existingProduct.quantity, 10) + productQuantity;
  } else {
    cart.push({...productToAdd, quantity: productQuantity});
  }

  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}


function updateCartTotalItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  let totalItems = 0;
  for (let item of cart) {
    totalItems = cart.length;
  }
  
  document.getElementById("cart-total-items").textContent = totalItems;
}

updateCartTotalItems();



  
  if(document.getElementById("item1")) {
    document.getElementById("item1").addEventListener("click", function() {
      addItemToCart(1), getCheckoutItemsAndTotal(), updateCartTotalItems();
    });
  }
  
  if(document.getElementById("item2")) {
    document.getElementById("item2").addEventListener("click", function() {
      addItemToCart(2), getCheckoutItemsAndTotal(), updateCartTotalItems();
    });
  }
  if(document.getElementById("item3")) {
    document.getElementById("item3").addEventListener("click", function() {
      addItemToCart(3), getCheckoutItemsAndTotal(), updateCartTotalItems();
    });
  }
  
  if(document.getElementById("item4")) {
    document.getElementById("item4").addEventListener("click", function() {
      addItemToCart(4), getCheckoutItemsAndTotal(), updateCartTotalItems();
    });
  }
  if(document.getElementById("item5")) {
    document.getElementById("item5").addEventListener("click", function() {
      addItemToCart(5), getCheckoutItemsAndTotal(), updateCartTotalItems();
    });
  }
  
  if(document.getElementById("item6")) {
    document.getElementById("item6").addEventListener("click", function() {
      addItemToCart(6), getCheckoutItemsAndTotal(), updateCartTotalItems();
    });
  }
