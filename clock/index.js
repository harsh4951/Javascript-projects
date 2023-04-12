const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function updateClock () {
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    let hourDeg = (currentHour / 12) * 360;
    hour.style.transform = `rotate(${hourDeg}deg)`

    let minuteDeg = (currentMinute / 60) * 360;
    minute.style.transform = `rotate(${minuteDeg}deg)`

    let secondDeg = (currentSecond / 60) * 360;
    second.style.transform = `rotate(${secondDeg}deg)`
}

updateClock()
