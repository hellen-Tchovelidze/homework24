let days = prompt(" შეიყვანეთ დღეები");
let hours = prompt("saatebi");
let minutes = prompt("seiyvane wutebi");
let seconds = prompt("seiyvanet wamebi");



if (isNaN(days) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
  alert("გთხოვთ, შეიყვანეთ მხოლოდ რიცხვები.");
}
else{
    if (days) {
        document.getElementById("DAYS").textContent = days;
        document.getElementById("HOURS").textContent = hours;
        document.getElementById("MINUTES").textContent = minutes;
        document.getElementById("SECONDS").textContent = seconds;
      }
}
days = hours = minutes = seconds = 0;



let TimerCount = setInterval(() => {
    seconds++;
    if (seconds === 59) {
        clearInterval(TimerCount);
    }
    // console.log(TimerCount);
}, 1000);
