"use strict";

const catList = document.querySelector(".cats-list");
const allCatButton = document.getElementById("allcats");
const randomCatButton = document.getElementById("randomCat");
const allergyCatButton = document.getElementById("allergyCat");

function showAll() {
  
  for (let index = 0; index <= 10; index++)
    // Make a request to the server (API) using the URL
    fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=2a006745-f90e-4896-bf5a-038a1a072e08`
    )
      .then((response) => {
        //console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);

        const article = document.createElement("article");
       
        article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p>`;

        console.log("data.id", data[index].id);

        catList.appendChild(article);
      });
}

function showRandom() {
  // Make a request to the server (API) using the URL

  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      console.log("data", data);

      const div = document.createElement("div");
      
      div.innerHTML = `<img src= "${data[0].url}" />`;

      //console.log("data.id", data[index].id);
      catList.appendChild(div);
    });
}

function showAllergy() {
  // Make a request to the server (API) using the URL
  for (let index = 0; index <= 10; index++)
    // Make a request to the server (API) using the URL
    fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=2a006745-f90e-4896-bf5a-038a1a072e08`
    )
      .then((response) => {
        //console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);

        const article = document.createElement("article");
        
        //filter data here to only share relevant
        if (data[index].hypoallergenic === 1) {
          article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p>`;

          console.log("data.id", data[index].id);

          catList.appendChild(article);
        }
      });
}

/*allCatButton.addEventListener("click", showAll());
randomCatButton.addEventListener("click", showRandom());
allergyCatButton.addEventListener("click", showAllergy());*/

// write functions for the other filters
/* 
 function showEasy(event){for (let index = 0; index <= 6; index++)
    // Make a request to the server (API) using the URL
    fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=2a006745-f90e-4896-bf5a-038a1a072e08`
    )
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);

        const article = document.createElement("article");
        article.innerHTML = ` <h3>${data[index].name}</h3><p>${data[index].description}</p>`;

        console.log("data.id", data[index].id);

        catList.appendChild(article);
      });};
 function showChild(event){};
 function showEnergetic(event){};


*/

/*
"use strict";

const catList = document.querySelector(".cats-list");
for (let index = 0; index <= 6; index++)
  // Make a request to the server (API) using the URL
  fetch(
    //`https://api.thecatapi.com/images/search`
    `https://api.thecatapi.com/v1/breeds?api_key=2a006745-f90e-4896-bf5a-038a1a072e08` // breeds?${whatever is in the search box}
  )
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      console.log("data", data);

      const article = document.createElement("article");
      article.innerHTML = ` <h3>${data[index].name}</h3><p>${data[index].description}</p>`;

      console.log("data.id", data[index].id);
      //`<img src= "${data.cfa_url}" />
      //<h3>${data.name}</h3>`;

      catList.appendChild(article);
    });
//}
*/
