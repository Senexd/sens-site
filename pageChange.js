var activeDiv = "Home";
let slideIndex = 0;

document.getElementById("Home").style.display = "block";
document.getElementById("About").style.display = "none";
document.getElementById("Comms").style.display = "none";

document.getElementById("homeButton").addEventListener("click", function () {
    document.getElementById(activeDiv).style.display = "none";
    document.getElementById("Home").style.display = "block";
    activeDiv = "Home";
});

document.getElementById("aboutButton").addEventListener("click", function () {
    document.getElementById(activeDiv).style.display = "none";
    document.getElementById("About").style.display = "block";
    activeDiv = "About";
});

document.getElementById("commButton").addEventListener("click", function () {
    document.getElementById(activeDiv).style.display = "none";
    document.getElementById("Comms").style.display = "block";
    activeDiv = "Comms";
});