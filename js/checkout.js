function removeFromCart(product) {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));
  const selectedProduct = productsInCart.find((cartProduct) => cartProduct.id === product.id);

  if (selectedProduct.quantity > 1) {
    selectedProduct.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  } else {
    const filteredProducts = productsInCart.filter((cartProduct) => {
      return cartProduct.id !== product.id;
    });
    localStorage.setItem("cart", JSON.stringify(filteredProducts));
  }

  getCheckoutItemsAndTotal();
  checkoutSummary();
}
function addToCart(product) {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));
  const selectedProduct = productsInCart.find((cartProduct) => cartProduct.id === product.id);

  if (selectedProduct.quantity) {
    selectedProduct.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  } else {
    const filteredProducts = productsInCart.filter((cartProduct) => {
      return cartProduct.id !== product.id;
    });
    localStorage.setItem("cart", JSON.stringify(filteredProducts));
  }

  getCheckoutItemsAndTotal();
  checkoutSummary();
}

function getCheckoutItemsAndTotal() {
  const products = JSON.parse(localStorage.getItem("cart"));
  const container = document.getElementById("containers");
  container.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    const productImageDiv = document.createElement("div");
    const productTextDiv = document.createElement("div");
    const productButtonsDiv = document.createElement("div");
    productImageDiv.classList.add("image-container-cart");
    productTextDiv.classList.add("name-and-price-cart");
    productButtonsDiv.classList.add("buttons-cart");

    productDiv.classList.add("product-container");

    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.setAttribute("alt", `image of ${product.model}`);
    productDiv.appendChild(productImageDiv);
    productImageDiv.appendChild(image);
    

    const productName = document.createElement("p");
    productName.classList.add("product-title");
    productName.textContent = `${product.model}`;
    productDiv.appendChild(productTextDiv);
    productTextDiv.appendChild(productName);

    const price = document.createElement("p");
    price.classList.add("product-price-hidden");
    price.textContent = `${product.price}`;
    productTextDiv.appendChild(price);

    const removeButton = document.createElement("button");
    removeButton.textContent = "-";
    removeButton.addEventListener("click", () => removeFromCart(product));
    productDiv.appendChild(productButtonsDiv);
    productButtonsDiv.appendChild(removeButton);

    const quantity = document.createElement("p");
    quantity.classList.add("product-quantity");
    quantity.textContent = `${product.quantity}`;
    productButtonsDiv.appendChild(quantity);

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", () => addToCart(product));
    productDiv.appendChild(productButtonsDiv);
    productButtonsDiv.appendChild(addButton);

    container.appendChild(productDiv);
  });
  updateCartTotalItems();

  const total = products.reduce((acc, product) => {
    const price = Number(product.price.replace("$ ", ""));
    const totalPrice = price * product.quantity;
    return acc + totalPrice;
  }, 0);

  const totalContainer = document.getElementById("totalPrice");
  totalContainer.textContent = `${total}`;
}