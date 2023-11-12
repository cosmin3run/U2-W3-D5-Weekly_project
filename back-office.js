const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

const URL = productId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productId
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = productId ? "PUT" : "POST";

window.onload = () => {
  if (productId) {
    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjk2Njk1ZDRmNjAwMTg1NjI0ZmMiLCJpYXQiOjE2OTk2MDg5MzUsImV4cCI6MTcwMDgxODUzNX0.w3F-DQY8m40OtsaLnwz3cvxOWcewW6QwljOU_TQbB74",
        "Content-Type": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((productInfos) => {
        const { name, description, brand, imageUrl, price } = productInfos;

        document.getElementById("name-input").value = name;
        document.getElementById("description-input").value = description;
        document.getElementById("brand-input").value = brand;
        document.getElementById("url-input").value = imageUrl;
        document.getElementById("price-input").value = price;
      });
    document.getElementById("title").innerText = "Modifica prodotto";
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.innerText = "Modifica";
    const deleteBtn = document.getElementById("delete-btn");
    deleteBtn.classList.remove("d-none");
  }
};

const handleSubmit = (event) => {
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
        alert("Il prodotto " + createdObj.name + " è stato modificato");
      } else {
        alert("Il prodotto " + createdObj.name + " è stato creato con successo");
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

const handleDelete = () => {
  const accept = confirm("Sei sicuro di voler cancellare il prodotto?");

  if (accept) {
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjk2Njk1ZDRmNjAwMTg1NjI0ZmMiLCJpYXQiOjE2OTk2MDg5MzUsImV4cCI6MTcwMDgxODUzNX0.w3F-DQY8m40OtsaLnwz3cvxOWcewW6QwljOU_TQbB74"
      }
    })
      .then((resp) => resp.json())
      .then((deleteProd) => {
        alert("il prodotto " + deleteProd.name + " è stato eliminato");
        window.location.assign("./home.html");
      });
  }
};

const saveProduct = document.getElementById("submit-btn");
saveProduct.addEventListener("click", () => {
  handleSubmit();
});

const deleteProduct = document.getElementById("delete-btn");
deleteProduct.addEventListener("click", () => {
  handleDelete();
});
