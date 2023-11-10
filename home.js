const cardDiv = document.getElementById("card-div");

const fetchData = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method: "get",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjk2Njk1ZDRmNjAwMTg1NjI0ZmMiLCJpYXQiOjE2OTk2MDg5MzUsImV4cCI6MTcwMDgxODUzNX0.w3F-DQY8m40OtsaLnwz3cvxOWcewW6QwljOU_TQbB74"
    }
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("API Error");
      }
      return resp.json();
    })
    .then((products) => {
      products.forEach((name) => {
        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = products.imageUrl;
        const divBody = document.createElement("div");
        divBody.className = "card-body";
        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = products.name;
        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = products.descriprion;
        const button = document.createElement("button");
        button.className = "btn btn-sm btn-outline-secondary";
        button.type = "button";
        button.innerText = "Details";
        // APPEND
        divBody.appendChild(h5);
        divBody.appendChild(p);
        divBody.appendChild(button);
        cardDiv.appendChild(img);
        cardDiv.appendChild(divBody);

        button.addEventListener;
      });
    });
};
