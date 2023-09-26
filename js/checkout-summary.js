function checkoutSummary() {
  const products = JSON.parse(localStorage.getItem("cart"));
  const container = document.getElementById("products-summary");
  container.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    const productImageDiv = document.createElement("div");
    const productTextDiv = document.createElement("div");
    const productButtonsDiv = document.createElement("div");
    productImageDiv.classList.add("image-container-summary");
    productTextDiv.classList.add("name-and-price-summary");
    productButtonsDiv.classList.add("buttons-summary");

    productDiv.classList.add("product-container-summary");

    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.setAttribute("alt", `image of ${product.model}`);
    productDiv.appendChild(productImageDiv);
    productImageDiv.appendChild(image);
    

    const productName = document.createElement("p");
    productName.textContent = `${product.model}`;
    productDiv.appendChild(productTextDiv);
    productTextDiv.appendChild(productName);

    const price = document.createElement("p");
    price.classList.add("product-price-hidden");
    price.textContent = `${product.price}`;
    productTextDiv.appendChild(price);


    const quantity = document.createElement("p");
    quantity.classList.add("product-quantity");
    quantity.textContent = `${product.quantity}`;
    productDiv.appendChild(quantity);



    container.appendChild(productDiv);
  });

  const total = products.reduce((acc, product) => {
    const price = Number(product.price.replace("$ ", ""));
    const totalPrice = price * product.quantity;
    return acc + totalPrice;
  }, 0);

  const totalContainer = document.getElementById("total-summary");
  totalContainer.textContent = `${total}`;
}