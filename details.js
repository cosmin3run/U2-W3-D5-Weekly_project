const params = new URLSearchParams(widnow.location.search);
const productId = params.get("productId");

widnow.onload = () => {
  const container = document.getElementById("container");

  fetch("https://striveschool-api.herokuapp.com/api/product" + appointmentId)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("API Error");
      }
      return resp.json();
    })
    .then((productObj) => {
      const divCard = document.createElement("div");
      divCard.className = "card col-8";
      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = productObj.imageUrl;
      const divCardBody = document.createElement("div");
      divCardBody.className = "card-body";
      const h5 = document.createElement("h5");
      h5.className = "card-title";
      const p = createElement("p");
      p.className = "card-text";
      const button = document.createElement("a");
      button.className = "btn btn-primary";
      button.type = "button";
      button.innerText = "Modifica prodotto";
      button.href = "https://striveschool-api.herokuapp.com/api/product" + appointmentId;
      //   APPEND
      divCardBody.appendChild(h5);
      divCardBody.appendChild(p);
      divCardBody.appendChild(button);
      divCard.appendChild(img);
      divCard.appendChild(divCardBody);
      container.appendChild(divCard);
    });
};
const handleclick = () => {
  window.location.assign("./back-office.html?productId=" + productId);
};
