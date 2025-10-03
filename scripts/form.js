// Product Array
const products = [
  { id: "p1001", name: "Laptop Pro 15" },
  { id: "p1002", name: "Smartphone X" },
  { id: "p1003", name: "Tablet Max" },
  { id: "p1004", name: "Wireless Headphones" },
  { id: "p1005", name: "Smartwatch Series 5" }
];

// Populate Product Select
const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Footer year + last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
