function generateList() {
  // 1. luam lista din local storage si o parsam ca array
  const motorbikes = JSON.parse(localStorage.getItem("cart"));
  console.log(motorbikes);

  const container = document.getElementById("containers");

  function addToCart(bike) {
    // ne luam cart-ul din localStorage
    const cart = JSON.parse(localStorage.getItem("cart"));

    // verific daca am deja cel putin motocicleta selectata in cart
    const existingBike = cart.find((cartBike) => cartBike.id === bike.id);
    if (existingBike) {
      // daca exista cresc cantitatea
      existingBike.quantity += 1;
    } else {
      // adaugam produsul nou in cart
      cart.push({ ...bike, quantity: 1 });
    }

    console.log(cart);

    // facem update la cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // 2. facem cate un div pentru FIECARE motocicleta
  motorbikes.forEach((bike) => {
    const motorBikeDiv = document.createElement("div");
    motorBikeDiv.classList.add("motor-bike-container");

    // 3. create image tag -> imagine motor;
    const image = document.createElement("img");
    image.setAttribute("src", bike.image);
    image.setAttribute("alt", `image of ${bike.brand} ${bike.model}`);

    // 4. append image tag
    motorBikeDiv.appendChild(image);

    // 5. create p tag -> nume motor
    const motorName = document.createElement("p");
    motorName.textContent = `${bike.brand} ${bike.model}`;

    // 6. append p tag
    motorBikeDiv.appendChild(motorName);

    // 7. create p tag -> pret motor
    const price = document.createElement("p");
    price.classList.add("motor-bike-price-hidden");
    price.textContent = `Price: ${bike.price}`;

    // 8. append price
    motorBikeDiv.appendChild(price);

   

    // 9. create add to cart button
    const addToCartButton = document.getElementById("addtocart");
    // const mainLocationButton = document.getElementsByClassName("new-product");
    // addToCartButton.textContent = "Add to cart";
    addToCartButton.addEventListener("click", () => addToCart(bike));

    // 10. append button to motorDiv
    // mainLocationButton.appendChild(addToCartButton);

    // . append motorBikeDiv to the container
    container.appendChild(motorBikeDiv);
  });
}

// const generateButton = document.getElementById("generateButton");
// generateButton.addEventListener("click", generateList);
