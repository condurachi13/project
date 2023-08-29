const motorbikes = [
  {
    id: 1,
    image:
      "/images/headphones-mobile-tab/xx99-headphones.png",
    
    model: "XX99 Mk II",
    price: "$ 2,999",
  },
  {
    id: 2,
    image:
      "/images/headphones-mobile-tab/x99-mark1-headphones.png",
    
    model: "XX99 MK I",
    price: "$ 1,750",
  },
  {
    id: 3,
    image:
      "/images/headphones-mobile-tab/xx59-headphones.png",
    
    model: "XX59",
    price: "$ 899",
  },
  {
    id: 4,
    image:
      "/images/speakers-mobile-tab/zx9-speaker.png",
    
    model: "ZX9",
    price: "$ 4,500",
  },
  {
    id: 5,
    image:
      "/images/speakers-mobile-tab/zx7-speaker.png",
    
    model: "ZX7",
    price: "$ 3,500",
  },
  {
    id: 6,
    image:
      "/images/earphones-mobile-tab/yx1-earphones.png",
    
    model: "YX1",
    price: "$ 599",
  },
];

localStorage.setItem("motorbikes", JSON.stringify(motorbikes));

const cart = [];
const existingCartItems = JSON.parse(localStorage.getItem("cart"));

// daca am deja elemente, nu imi mai initializeaza cartul
if (!existingCartItems || existingCartItems.length === 0) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
