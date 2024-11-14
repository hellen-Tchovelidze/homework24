let days = prompt("შეიყვანეთ დღეები");
let hours = prompt("შეიყვანე საათი ");
let minutes = prompt("შეიყვანე წუთები");
let seconds = prompt("შეიყვანე წამები");

if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
  alert("გთხოვთ, შეიყვანეთ მხოლოდ რიცხვები.");
}
 else {
  days = parseInt(days);
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);

  document.getElementById("DAYS").textContent = days;
  days < 10 ? "0" + days : days;
  document.getElementById("HOURS").textContent = hours;
  hours < 10 ? "0" + hours : hours;
  document.getElementById("MINUTES").textContent = minutes;
  minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("SECONDS").textContent = seconds;
  seconds < 10 ? "0" + seconds : seconds;
}

const countdown = setInterval(() => {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else if (hours > 0) {
    hours--;
    minutes = 59;
    seconds = 59;
  } else if (days > 0) {
    days--;
    hours = 23;
    minutes = 59;
    seconds = 59;
  }
  document.getElementById("DAYS").textContent = days < 10 ? "0" + days : days;
  document.getElementById("HOURS").textContent =
    hours < 10 ? "0" + hours : hours;
  document.getElementById("MINUTES").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("SECONDS").textContent =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);
