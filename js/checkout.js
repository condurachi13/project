function removeFromCart(bike) {
  // imi iau motocicletele din cart
  const bikesInCart = JSON.parse(localStorage.getItem("cart"));

  const selectedBike = bikesInCart.find((cartBike) => cartBike.id === bike.id);

  // daca avem mai multe bucati din acelasi produs
  if (selectedBike.quantity > 1) {
    // scadem cantitatea pentru produsul respectiv
    selectedBike.quantity -= 1;

    // facem uppdate la localstorage unde noul nostru cart
    // a redus cantitatea cu 1 pentru produs nostru
    localStorage.setItem("cart", JSON.stringify(bikesInCart));
  } else {
    // scot din array motocicleta pe care vreau sa o sterg
    // mi se creaza un nou array cu motocicletele ramase
    const filteredBikes = bikesInCart.filter((cartBike) => {
      return cartBike.id !== bike.id;
    });

    // facem update la localstorage cu motocicletele ramase
    localStorage.setItem("cart", JSON.stringify(filteredBikes));
  }

  // resetam div-urile pentru products si total
  document.getElementById("products").innerHTML = "";
  document.getElementById("total").innerHTML = "";

  // reapelam functia de generare a cosului de cumparaturi
  // pentru noul local storage
  getCheckoutItemsAndTotal();
}

function getCheckoutItemsAndTotal() {
  const bikes = JSON.parse(localStorage.getItem("cart"));

  const container = document.getElementById("products");

  bikes.forEach((bike) => {
    const motorBikeDiv = document.createElement("div");
    motorBikeDiv.classList.add("motor-bike-container");

    // 3. create image tag -> imagine motor;
    const image = document.createElement("img");
    image.setAttribute("src", bike.image);
    image.setAttribute("alt", `image of ${bike.model}`);

    // 4. append image tag
    motorBikeDiv.appendChild(image);

    // 5. create p tag -> nume motor
    const motorName = document.createElement("p");
    motorName.textContent = `${bike.model}`;

    // 6. append p tag
    motorBikeDiv.appendChild(motorName);

    const qty = document.createElement("p");
    qty.textContent = `${bike.quantity}`;

    motorBikeDiv.appendChild(qty);

    // 7. create p tag -> pret motor
    const price = document.createElement("p");
    price.classList.add("motor-bike-price-hidden");
    price.textContent = `${bike.price}`;

    // 8. append price
    motorBikeDiv.appendChild(price);

    motorBikeDiv.addEventListener("mouseenter", () => {
      price.classList.remove("motor-bike-price-hidden");
      price.classList.add("motor-bike-price-show");
    });

    motorBikeDiv.addEventListener("mouseleave", () => {
      price.classList.add("motor-bike-price-hidden");
      price.classList.remove("motor-bike-price-show");
    });

    // remove item button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete from cart";
    removeButton.addEventListener("click", () => removeFromCart(bike));

    motorBikeDiv.appendChild(removeButton);

    // . append motorBikeDiv to the container
    container.appendChild(motorBikeDiv);
  });

  const total = bikes.reduce((acc, bike) => {
    const price = Number(bike.price.split("$")[0]);

    const totalPrice = price * bike.quantity;
    return acc + totalPrice;
  }, 0);

  const totalContainer = document.getElementById("total");
  totalContainer.textContent = `${total}$`;
}
