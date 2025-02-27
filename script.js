const splashElement = document.getElementById("splashText");
const textElement = document.getElementById("mainHeader");
const text = "Welcome!";
let index = 0;
let splashIndex = 0;

let postSplashElements = document.getElementById("loadPostSplash");

let loadPostSplashElements = false;

const splashTexts = [
    "Today's gonna be a good day!",
    "https://bsky.app/profile/senexd.me",
    "I better not catch you frowning",
    "MA, MA! I'M ONLINE MA!",
    "If you're seeing this, you rolled a 1/10 chance :)",
    "Music? Have an Amen Break!",
    ":3 :3 :3 :3 :3 :3",
    "FUN FACT! Most of my music stems from me messing around!",
    "If it works it ain't stupid",
    "I ran out of ideas... XD"
];

splashText = splashTexts[Math.floor(Math.random() * splashTexts.length)];

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 40);
    }
    else if (splashIndex < splashText.length) {
        splashElement.textContent += splashText.charAt(splashIndex);
        splashIndex++;
        setTimeout(typeText, 40);
    }
    else {
        loadPostSplashElements = true;
        loadPostSplash();
    }
}

let i = 0;

function loadPostSplash() {
    if ((i < 1) & loadPostSplashElements) {
        postSplashElements.style.opacity = i += .01;
        setTimeout(loadPostSplash, 1);
    }
}

window.onload = function () {
    window.scrollTo(0, 0); // Ensure the page starts at the top
};


typeText();

