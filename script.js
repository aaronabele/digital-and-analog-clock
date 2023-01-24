let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();
let seconds = now.getSeconds();

const digiHour = document.querySelector(".digi-clock__hours");
const digiMinutes = document.querySelector(".digi-clock__minutes");
const digiSeconds = document.querySelector(".digi-clock__seconds");
const digiDots = document.querySelector(".digi-clock");

function logTime() {
  now = new Date();
  minutes = now.getMinutes();
  hours = now.getHours();
  seconds = now.getSeconds();
  digiHour.innerText = formatNumberString(hours);
  digiMinutes.innerText = formatNumberString(minutes);
  digiSeconds.innerText = formatNumberString(seconds);
  dots();

  //Analoge Uhr
  const hoursEl = document.querySelector(".clock__hours");
  hoursEl.style.setProperty("--hours", hours * 30 + "deg");

  const minutesEl = document.querySelector(".clock__minutes");
  minutesEl.style.setProperty("--minutes", minutes * 6 + "deg");

  const secondsEl = document.querySelector(".clock__seconds");
  secondsEl.style.setProperty("--seconds", seconds * 6 + "deg");
}

function formatNumberString(n) {
  let s = "0" + n.toString();
  return s.slice(-2);
}

setInterval(logTime, 1000);

function dots() {
  if (seconds % 2 === 0) {
    digiDots.style.setProperty("--dot-visibility", "visible");
  } else {
    digiDots.style.setProperty("--dot-visibility", "hidden");
  }
}
