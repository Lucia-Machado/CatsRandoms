document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("container");
    let imgGatito = document.getElementById("imgGatito");
    let btn = document.getElementById("btn");
  
    btn.addEventListener("click", () => {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
          const imageUrl = data[0].url;
  
          imgGatito.src = imageUrl;
        });
    });
  });
  
