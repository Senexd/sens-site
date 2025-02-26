var darkMode = localStorage.getItem("darkMode") === "true";

if (localStorage.getItem("darkMode") === null) {
    darkMode = true;
    localStorage.setItem("darkMode", "true");
}

document.getElementById("style").setAttribute("href", darkMode ? "dark.css" : "light.css");

document.getElementById("colorMode").addEventListener("click", function () {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode.toString());
    document.getElementById("style").setAttribute("href", darkMode ? "dark.css" : "light.css");
});
