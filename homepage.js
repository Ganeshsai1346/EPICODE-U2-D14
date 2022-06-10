/** @format */

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",

    "Content-Type": "application/json",
  },
};

const getProducts = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      options
    );

    const products = await response.json();
    productsDisplay(products);
    return products;
  } catch (error) {
    console.log(error);
  }
};

const productsDisplay = (products) => {
  const ul = document.getElementById("currentProducts");

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerHTML = `<span> ${product.name}</span><span badge badge-dark d-flex align-items-center ml-aiuto mr-2>${product.brand}</span><span>${product.price}€</span><span>${product.image}</span>`;

    ul.appendChild(li);
  });
};

window.onload = async () => {
  getProducts();
};
