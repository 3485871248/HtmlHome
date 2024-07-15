const time = document.getElementById("time-text");

function setTime() {
    let now = new Date();
    time.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

setTime()
setInterval(setTime, 1000);