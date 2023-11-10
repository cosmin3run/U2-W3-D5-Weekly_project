const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

const URL = productId
  ? "https://striveschool-api.herokuapp.com/api/product" + productId
  : "https://striveschool-api.herokuapp.com/api/product";
const method = productId ? "PUT" : "POST";

const handleSubmit = (event) => {
  event.prevendtDefault();

  const productObj = {
    name: document.getElementById("name-input").value,
    description: document.getElementById("description-input").value,
    brand: document.getElementById("brand-input").value,
    imageUrl: document.getElementById("url-input").value,
    price: document.getElementById("price-input").value
  };

  fetch(URL, {
    method: method,
    body: JSON.stringify(productObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjk2Njk1ZDRmNjAwMTg1NjI0ZmMiLCJpYXQiOjE2OTk2MDg5MzUsImV4cCI6MTcwMDgxODUzNX0.w3F-DQY8m40OtsaLnwz3cvxOWcewW6QwljOU_TQbB74",
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((createdObj) => {
      if (productId) {
        alert("il prodotto " + createdObj + " è stato modificato");
      } else {
        alert("Il prodotto " + createdObj + " è stato creato con successo");
      }
    });
  console.log(productObj);
  if (!productId) {
    document.getElementById("name-input").value = "";
    document.getElementById("description-input").value = "";
    document.getElementById("brand-input").value = "";
    document.getElementById("url-input").value = "";
    document.getElementById("price-input").value = "";
  }
};
const saveProduct = document.getElementById("submit-btn");
saveProduct.addEventListener("click", function (event) {
  document.prevendtDefault();
  handleSubmit();
});
