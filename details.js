const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");
console.log(productId);

window.onload = () => {
  const container = document.getElementById("container");

  fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjk2Njk1ZDRmNjAwMTg1NjI0ZmMiLCJpYXQiOjE2OTk2MDg5MzUsImV4cCI6MTcwMDgxODUzNX0.w3F-DQY8m40OtsaLnwz3cvxOWcewW6QwljOU_TQbB74"
    }
  })
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error("API Error");
      }
      return resp.json();
    })
    .then((productObj) => {
      console.log(productObj);
      const divCard = document.createElement("div");
      divCard.className = "card col-8";
      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = productObj.imageUrl;
      const divCardBody = document.createElement("div");
      divCardBody.className = "card-body";
      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerText = productObj.name;
      const p = document.createElement("p");
      p.className = "card-text";
      p.innerText = productObj.description;
      const button = document.createElement("a");
      button.className = "btn btn-primary";
      button.type = "button";
      button.innerText = "Modifica prodotto";
      button.id = "handle-btn";
      //   APPEND
      divCardBody.appendChild(h5);
      divCardBody.appendChild(p);
      divCardBody.appendChild(button);
      divCard.appendChild(img);
      divCard.appendChild(divCardBody);
      container.appendChild(divCard);
      const handleBtn = document.getElementById("handle-btn");
      handleBtn.addEventListener("click", () => {
        window.location.assign("./back-office.html?productId=" + productId);
      });
    });
};
