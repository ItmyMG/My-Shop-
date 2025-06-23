const products = [
  { name: "T-shirt", price: 15 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 10 },
];

let productsDiv = document.getElementById("products");

products.forEach(product => {
  let item = document.createElement("div");
  item.className = "product";
  item.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button onclick="alert('Added to cart!')">Add to Cart</button>
  `;
  productsDiv.appendChild(item);
});
