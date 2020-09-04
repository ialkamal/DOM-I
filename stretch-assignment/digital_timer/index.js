let timer = displayTimer();
let myTimer = 0;

let startBtn = document.querySelector("button#start");

startBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  myTimer = setInterval(timer, 10);
  startBtn.disabled = true;
  resetBtn.disabled = true;
});

let resetBtn = document.querySelector("button#reset");

resetBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  timer = displayTimer();
  document.getElementById("msTens").textContent = "-";
  document.getElementById("msHundreds").textContent = "-";
  document.getElementById("secondOnes").textContent = "-";
  document.getElementById("secondTens").textContent = "-";
  document.querySelector(".digits").classList.remove("redDigit");
  startBtn.disabled = false;
});

function displayTimer() {
  let time = 10;
  return function () {
    timeString = time.toString().split("");
    if (timeString.length === 2) {
      document.getElementById("secondTens").textContent = 0;
      document.getElementById("secondOnes").textContent = 0;
      document.getElementById("msHundreds").textContent = 0;
      document.getElementById("msTens").textContent = timeString[0];
    } else if (timeString.length === 3) {
      document.getElementById("secondTens").textContent = 0;
      document.getElementById("secondOnes").textContent = 0;
      document.getElementById("msHundreds").textContent = timeString[0];
      document.getElementById("msTens").textContent = timeString[1];
    } else if (timeString.length === 4) {
      document.getElementById("secondTens").textContent = 0;
      document.getElementById("secondOnes").textContent = timeString[0];
      document.getElementById("msHundreds").textContent = timeString[1];
      document.getElementById("msTens").textContent = timeString[2];
    } else if (timeString.length === 5) {
      document.getElementById("secondTens").textContent = timeString[0];
      document.getElementById("secondOnes").textContent = timeString[1];
      document.getElementById("msHundreds").textContent = timeString[2];
      document.getElementById("msTens").textContent = timeString[3];
    }
    if (time === 10000) {
      clearInterval(myTimer);
      document.querySelector(".digits").classList.add("redDigit");
      resetBtn.disabled = false;
    }
    return (time += 10);
  };
}
