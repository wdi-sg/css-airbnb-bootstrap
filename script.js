function alertHelper() {
    alert("this feature has not been added yet, check back soon")
};

let destinations = document.getElementById("destination");
let guidebook = document.getElementById("guidebook");
guidebook.addEventListener("click", alertHelper);
destinations.addEventListener("click", alertHelper);

function googleMaps(place){
    console.log(place +"clicked")
let url = "https://www.google.com.sg/maps/place/"+place;
window.open(url)
}

let sanFrancisco = document.getElementById("box1");
let newYork = document.getElementById("box2");
let london = document.getElementById("box3");
let napa = document.getElementById("box4");
let sonoma = document.getElementById("box5");
let sanFrancisco2 = document.getElementById("box6");


sanFrancisco.addEventListener("click", function() {googleMaps(sanFrancisco.innerText);});
newYork.addEventListener("click", function(){googleMaps(newYork.innerText);});
london.addEventListener("click", function(){googleMaps(london.innerText);});
napa.addEventListener("click", function(){googleMaps(napa.innerText);});
sanFrancisco2.addEventListener("click", function(){googleMaps(sanFrancisco2.innerText);});
sonoma.addEventListener("click", function(){googleMaps(sonoma.innerText)});

