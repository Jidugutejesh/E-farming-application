<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>E-Farming Platform</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
</head>
<body>

  <header>
    <div class="container">
      <h1>E-Farming</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#add-product">Add Product</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Buy Fresh. Eat Healthy.</h2>
      <p>Connecting Farmers and Customers Directly</p>
      <a href="#products" class="btn">Explore Products</a>
    </div>
  </section>

  <section id="products">
    <h3 class="section-title">Available Products</h3>
    <div id="product-list" class="product-list">
      <!-- JS will populate this -->
    </div>
  </section>

  <section id="add-product">
    <h3 class="section-title">Add New Product</h3>
    <form id="product-form">
      <input type="text" id="productName" placeholder="Product Name" required />
      <input type="number" id="productPrice" placeholder="Price (₹)" required />
      <input type="text" id="productImage" placeholder="Image filename (e.g. apple.jpg)" required />
      <button type="submit" class="btn">Add Product</button>
    </form>
  </section>

  <section id="contact">
    <h3 class="section-title">Contact Us</h3>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit" class="btn">Send</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 E-Farming. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
/* Font & Reset */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background: #f9f9f9;
  color: #333;
}

/* Header */
header {
  background-color: #27ae60;
  color: white;
  padding: 20px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: 500;
}

nav a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  background: url('https://images.unsplash.com/photo-1606788075762-9a1e6cfd78e4?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(17, 212, 92);
  text-align: center;
}

.hero-content h2 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn {
  background: #27ae60;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;
  text-decoration: none;
}

.btn:hover {
  background: #219150;
}

/* Sections */
section {
  padding: 40px 20px;
  max-width: 1100px;
  margin: auto;
  background: rgb(255, 255, 255);
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
}

/* Product Cards */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.product-card {
  background: #f4fff6;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.03);
}

.product-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.product-card h4 {
  margin: 10px 0 5px;
}

.product-card p {
  font-weight: bold;
  color: #2d8a49;
}

/* Forms */
form input, form textarea, form button {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

textarea {
  resize: vertical;
  height: 100px;
}

/* Footer */
footer {
  background: #27ae60;
  color: white;
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h2 {
    font-size: 2rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .container {
    flex-direction: column;
  }
}

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


