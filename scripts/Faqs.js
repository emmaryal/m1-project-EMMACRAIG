"use strict"

function showAnswer1() {
    const answer1 = document.getElementById('q1-div');
    //const button1 = document.getElementById("q1-button");

    if (answer1.style.display === "none") {
        answer1.style.display = "block";
    } else {
       
        answer1.style.display = "none";
    }
 }

 function showAnswer2() {
    const answer1 = document.getElementById('q2-div');
    
    if (answer1.style.display === "none") {
        answer1.style.display = "block";
    } else {
        answer1.style.display = "none";
    }
 }

 function showAnswer3() {
    const answer1 = document.getElementById('q3-div');
    
    if (answer1.style.display === "none") {
        answer1.style.display = "block";
    } else {
        answer1.style.display = "none";
    }
 }

 function showAnswer4() {
    const answer1 = document.getElementById('q4-div');
    
    if (answer1.style.display === "none") {
        answer1.style.display = "block";
    } else {
        answer1.style.display = "none";
    }
 }

 calcAge = (catYears) =>
 {
     let humanYears = 0;
     if (catYears > 2)
     {
         humanYears = 4*(catYears - 2) + catYears -2;
         return humanYears;
     }
     else if (catYears ===2)
     {
         return humanYears = 25;
     }
     else
     {
         return humanYears = 13;
     }
 }