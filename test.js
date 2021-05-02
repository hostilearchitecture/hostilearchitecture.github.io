let countDownDate = new Date("Jul 3, 2021 12:20:00").getTime();
let countdown = setInterval(function() {
    let now = new Date().getTime(), time_left = countDownDate - now,
        days = Math.floor(time_left / (1000 * 60 * 60 * 24)),
        hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((time_left % (1000 * 60 *60)) / (1000 * 60)),
        seconds = Math.floor((time_left % (1000 * 60)) / 1000)

    document.getElementById("days").innerHTML = days + " дней "
    document.getElementById("hours").innerHTML = hours + " часов "
    document.getElementById("mins").innerHTML = minutes + " минут "
    document.getElementById("secs").innerHTML = seconds + " секунд"
}, 1000)