"use strict";

const catList = document.querySelector(".cats-list");
const frontImg = document.querySelector(".random-cat-portal");

const allCatButton = document.getElementById("allcats");
const randomCatButton = document.getElementById("randomCat");
const allergyCatButton = document.getElementById("allergyCat");
const intelliCatButton = document.getElementById("intelligentCats");
const energeticCatButton = document.getElementById("energeticCats");

function showAll() {
  // clear data from previous search

  while (catList.hasChildNodes()) {
    catList.removeChild(catList.firstChild);
  }
  for (let index = 0; index <= 66; index++)
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
//do wiki link as a pop up
        article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p>
        
        <span><a href="${data[index].wikipedia_url}">link to wikipedia</a></span>`;

        console.log("data.id", data[index].id);

        catList.appendChild(article);
      })
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
      // clear data from previous search

      while (catList.hasChildNodes()) {
        catList.removeChild(catList.firstChild);
      }
      const div = document.createElement("div");

      //div.innerHTML = `<img class = "random_cat"src= "${data[0].url}" />`;
      div.innerHTML = `<img class = "random-cat" src= "${data[0].url}" />`;

      //console.log("data.id", data[index].id);
      catList.appendChild(div);
    });
}

function showBanner() {
  // Make a request to the server (API) using the URL

  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      

      
      const div = document.createElement("div");

      div.innerHTML = `<img class = "random-cat-portal" src= "${data[0].url}" />`;

      frontImg.appendChild(div);
    });
}

function getThreeCats() {

  showBanner();
  showBanner();
  showBanner();
}






/*function showCats() {
  // clear data from previous search
  while (catList.hasChildNodes()) {
    catList.removeChild(catList.firstChild);
  }
  // Make a request to the server (API) using the URL
 for (let index = 0; index <= 6; index++)
    // Make a request to the server (API) using the URL
    for (let index = 0; index <= 66; index++){
    fetch( // change this to the images page then filter for hats
      `https://api.thecatapi.com/v1/images/search?api_key=2a006745-f90e-4896-bf5a-038a1a072e08`
      //https://api.thecatapi.com/v1/images/search
    )
      .then((response) => {
        //console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data[index]);


        const article = document.createElement("article");

     
          //article.innerHTML = `<img src= "${data.array[index].url}" />`;

          console.log("data.url", data[index].url);

          catList.appendChild(article);
        }
      );
}}*/


function showChildFriendly() {
  // clear data from previous search

  while (catList.hasChildNodes()) {
    catList.removeChild(catList.firstChild);
  }
  // Make a request to the server (API) using the URL
  for (let index = 0; index <= 66; index++)
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
        if (data[index].child_friendly >= 4) {
          article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p><span><a href="${data[index].wikipedia_url}">link to wikipedia</a></span>`;

          console.log("data.id", data[index].id);

          catList.appendChild(article);
        }
      });
}


function showDogFriendly() {
  // clear data from previous search

  while (catList.hasChildNodes()) {
    catList.removeChild(catList.firstChild);
  }
  // Make a request to the server (API) using the URL
  for (let index = 0; index <= 66; index++) {
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
        if (data[index].dog_friendly > 4) {
          article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p><span><a href="${data[index].wikipedia_url}">link to wikipedia</a></span>`;

          console.log("data.id", data[index].id);

          catList.appendChild(article);
        }
  });}}


  function showIntelligence() {
    // clear data from previous search
  
    while (catList.hasChildNodes()) {
      catList.removeChild(catList.firstChild);
    }
    // Make a request to the server (API) using the URL
    for (let index = 0; index <= 66; index++)
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
          if (data[index].intelligence >4) {
            article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p><span><a href="${data[index].wikipedia_url}">link to wikipedia</a></span>`;
  
            console.log("data.id", data[index].id);
  
            catList.appendChild(article);
          }
        });
  }
  
  function showEnergetic() {
    // clear data from previous search
  
    while (catList.hasChildNodes()) {
      catList.removeChild(catList.firstChild);
    }
    // Make a request to the server (API) using the URL
    for (let index = 0; index <= 66; index++)
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
          if (data[index].energy_level >= 4) {
            article.innerHTML = `<h3>${data[index].name}</h3><p>${data[index].description}</p><span><a href="${data[index].wikipedia_url}">link to wikipedia</a></span>`;
  
            console.log("data.id", data[index].id);
  
            catList.appendChild(article);
          }
        });
  }
  
    

//allCatButton.addEventListener("click", showAll());
//randomCatButton.addEventListener("click", showRandom());
// allergyCatButton.addEventListener("click", showAllergy())
