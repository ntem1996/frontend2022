// JavaScript Document
console.log("hi");

var menuOpenKnop = document.querySelector("header > nav > section > button");

menuOpenKnop.addEventListener("click", menuOpenMaken);

function menuOpenMaken () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.add("open");
}


var menuSluitenKnop = document.querySelector("nav:nth-of-type(2) button");

menuSluitenKnop.addEventListener("click", menuSluiten);

function menuSluiten () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.remove("open");
}

// knop voor filteren openen 

var filterOpenKnop = document.querySelector("main section:nth-of-type(2)");

filterOpenKnop.addEventListener("click", filterOpenen);

function filterOpenen () {
    var filter = document.querySelector("main section:nth-of-type(2)");
    filter.classList.toggle("filterOpen");
}



