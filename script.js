function alertFeature() {
    alert("this feature has not been added yet, check back soon")
};

let dest = document.getElementById("dest");
let guide = document.getElementById("guide");
guide.addEventListener("click", alertFeature);
dest.addEventListener("click", alertFeature);


let sanFran1 = document.getElementById("box1");
let newYork = document.getElementById("box2");
let london = document.getElementById("box3");
let napa = document.getElementById("box4");
let sonoma = document.getElementById("box5");
let sanFran2 = document.getElementById("box6");

function gMaps(location){
let url = "https://www.google.com.sg/maps/place/"+location;
window.open(url)
}


sanFran1.addEventListener("click", function() {gMaps(sanFran1.innerText);});
newYork.addEventListener("click", function(){gMaps(newYork.innerText);});
london.addEventListener("click", function(){gMaps(london.innerText);});
napa.addEventListener("click", function(){gMaps(napa.innerText);});
sanFran2.addEventListener("click", function(){gMaps(sanFran2.innerText);});
sonoma.addEventListener("click", function(){gMaps(sonoma.innerText)});
