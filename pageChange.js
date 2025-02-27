var activeDiv = "Home";
var isAnimating = false;
var time = .3

document.getElementById("homeButton").addEventListener("click", function () {
    fadeSwap(activeDiv, "Home");
});

document.getElementById("aboutButton").addEventListener("click", function () {
    fadeSwap(activeDiv, "About");
});

document.getElementById("commButton").addEventListener("click", function () {
    fadeSwap(activeDiv, "Comms");
});

async function fadeSwap(currentDiv, newDiv) {
    if (!isAnimating && (currentDiv != newDiv)) {
        isAnimating = true;
        document.getElementById(currentDiv).style.animation = `fadeOut ${time}s linear`;
        await new Promise(resolve => setTimeout(resolve, time * 900));
        document.getElementById(currentDiv).style.display = "none";
        document.getElementById(newDiv).style.animation = `fadeIn ${time}s linear`;
        await new Promise(resolve => setTimeout(resolve, time * 900));
        document.getElementById(newDiv).style.display = "block";
        isAnimating = false;
        activeDiv = newDiv;
    }
}