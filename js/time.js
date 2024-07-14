const time = document.getElementById("time");

function setTime() {
    let now = new Date();
    time.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

setTime()
setInterval(setTime, 1000);