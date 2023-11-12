window.onload = () => {
  const cardDiv = document.getElementById("card-div");

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
        const divGenerico = document.createElement("div");
        divGenerico.className = "card mb-4 shadow-sm";
        const divCol = document.createElement("div");
        divCol.className = "col-md-4";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = name.imageUrl;
        img.style = "object-fit: cover; height: 200px;";
        const divBody = document.createElement("div");
        divBody.className = "card-body";
        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = name.name;
        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = name.description;
        const button = document.createElement("a");
        button.className = "btn btn-sm btn-outline-secondary";
        button.href = "./detail.html?productId=" + name._id;
        button.innerText = "Details";
        // APPEND
        divBody.appendChild(h5);
        divBody.appendChild(p);
        divBody.appendChild(button);
        divGenerico.appendChild(img);
        divGenerico.appendChild(divBody);
        divCol.appendChild(divGenerico);
        cardDiv.appendChild(divCol);
      });
    });
};

fetchData();
