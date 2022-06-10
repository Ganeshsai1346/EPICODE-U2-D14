/** @format */

const options = {
  method: "POST",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",
    "Content-Type": "application/json",
  },
};
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const items = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      price: document.getElementById("price").value,
      imageUrl: document.getElementById("imageUrl").value,
    };
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      options
    );
    const productsReceive = await response.json();
  } catch (err) {
    console.log(err);
  }
};
