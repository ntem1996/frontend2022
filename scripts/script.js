// JavaScript Document
console.log("hi");

var menuOpenKnop = document.querySelector("header > nav > ul > li > button");

menuOpenKnop.addEventListener("click", menuOpenMaken);

function menuOpenMaken () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    var deDiv = document.querySelector("header div");
    deNav.classList.add("open");
    deDiv.classList.add("open");
}


var menuSluitenKnop = document.querySelector("nav:nth-of-type(2) button");

menuSluitenKnop.addEventListener("click", menuSluiten);

function menuSluiten () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    var deDiv = document.querySelector("header div");
    deNav.classList.remove("open");
    deDiv.classList.remove("open");
}

// knop voor search button aanzetten

var zoekenOpenKnop = document.querySelector("header > nav > ul > li:nth-of-type(1)");

zoekenOpenKnop.addEventListener("click", zoekBalkOpenen);

function zoekBalkOpenen () {
    var deZoekBalk = document.querySelector("header section:nth-of-type(1)");
    var deHeader = document.querySelector ("header nav:nth-of-type(1) ul");
    deZoekBalk.classList.add("zoekBalk");
    deHeader.classList.add("zoekBalk");
}

//knop voor search sluiten

var zoekenSluitenKnop = document.querySelector("section:nth-of-type(1) li > button");

zoekenSluitenKnop.addEventListener("click", zoekBalksluiten);

function zoekBalksluiten () {
    var deZoekBalk = document.querySelector("header section:nth-of-type(1)");
    var deHeader = document.querySelector("header nav:nth-of-type(1) ul");
    deZoekBalk.classList.remove("zoekBalk");
    deHeader.classList.remove("zoekBalk");

}

// knop voor filteren openen 

var filterOpenKnop = document.querySelector("main nav > section");

if(filterOpenKnop != null){
    filterOpenKnop.addEventListener("click", filterOpenen);
}

function filterOpenen () {
//    voegt class toe aan eerste deel van de filter (de knop dus)
    var filter = document.querySelector("main > nav > section:nth-of-type(1)");
    filter.classList.toggle("filterOpen");


    // voegt class toe aan het lijst gedeelte van de filter
    var filter = document.querySelector("main > nav > section:nth-of-type(2)");
    filter.classList.toggle("filterOpen");

 
}







