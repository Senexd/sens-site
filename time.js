function updateTime() {
    document.getElementById("time").textContent = new Date().toLocaleTimeString();
    setTimeout(updateTime, 1000);
}

updateTime();