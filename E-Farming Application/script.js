const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");

let products = [
  { name: "Apple", price: 100, image:"apple.jpeg" },
  { name: "Tomato", price: 40, image: "tomatoes.jpg" },
  { name: "Carrot", price: 60, image: "carrots.jpg" },
  { name: "Banana", price: 50, image: "bananas.jpg" }
];

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;

  const product = { name, price, image };
  products.push(product);
  displayProducts();
  productForm.reset();
});

function displayProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="images/${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
    `;
    productList.appendChild(card);
  });
}

// Initial load
displayProducts();
