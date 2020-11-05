"use strict";

function showAnswer1() {
  const answer1 = document.getElementById("q1-div");

  //const button1 = document.getElementById("q1-button");

  if (answer1.style.display === "none") {
    answer1.style.display = "block";
  } else {
    answer1.style.display = "none";
  }
}

function showAnswer2() {
  
  const answer2 = document.getElementById("q2-div");
 
  //const button1 = document.getElementById("q1-button");

  if (answer2.style.display === "none") {
    answer2.style.display = "block";
  }
   else {
    answer2.style.display = "none";
  }
}

function showAnswer3() {
  const answer3 = document.getElementById("q3-div");

  if (answer3.style.display === "none") {
    answer3.style.display = "block";
  } else {
    answer3.style.display = "none";
  }
}

function showAnswer4() {
  const answer4 = document.getElementById("q4-div");

  if (answer4.style.display === "none") {
    answer4.style.display = "block";
  } else {
    answer4.style.display = "none";
  }
}

const age = document.getElementById("catYears");
const calcButton = document.getElementById("catCalcButton");
const humanAge = document.getElementById("humanAge");

calcButton.addEventListener("click", function (event) {
  event.preventDefault();

  let humAge = 0;
  let catAge = age.value;
  console.log("cat age", catAge);

  if (catAge > 2) {
    humAge = 4 * (catAge - 2) + 25;
  } else if (catAge == 2) {
    humAge = 25;
  } else if (catAge == 1) {
    humAge = 13;
  } else {
    console.log("Please enter a valid number");
  }
  console.log("human age", humAge);

  humanAge.textContent = `In human years, your cat would be ${humAge}`;
});
