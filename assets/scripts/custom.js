"use strict";

console.log("JS DOM");


//Elementu pasirinkimas

//1. Pagal // ID
let pagalID = document.getElementById("subtitle");
console.log(pagalID);


pagalID.style.color = "red";
pagalID.style.fontSize = "2rem";

//2. pagal klase
let pagalKlase = document.getElementsByClassName("main");
console.log(pagalKlase);

for(let i=0; i<pagalKlase.length; i++){
    pagalKlase[i].style.color = "blue";
    pagalKlase[i].style.fontSize = "1.5rem";

}

//3. naudojant CSS selector, pasirenkame viena elementa
let vienasCSS = document.querySelector(".main");
console.log(vienasCSS);

//4. naudojant CSS selector, pasirenkame visus tinkamus elementus
let visiCSS = document.querySelectorAll(".main");
console.log(visiCSS);


let skaitliukas = document.querySelector(".counter");
console.log(skaitliukas);

skaitliukas.addEventListener("click", function(){
  console.log(skaitliukas.innerHTML);
});
