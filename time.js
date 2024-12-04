function updateTime() {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    setTimeout(updateTime, 1000);
}

updateTime();