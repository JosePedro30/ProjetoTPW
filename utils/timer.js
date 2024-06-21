export function init(){
  localStorage.setItem("Time",JSON.stringify(600))
}

export function startTime() {
  const startMinutes = localStorage.getItem("Time");
  let time = sessionStorage.getItem("remainingTime") || startMinutes;

  const countDown = document.getElementById("countdown");
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countDown.innerHTML = `${minutes}:${seconds}`;

  if (time > 0) {
    time--;
  } else {
    clearInterval(intervalId); // Interrompe o intervalo quando o tempo acaba
  }

  // Armazene o tempo restante no sessionStorage
  sessionStorage.setItem("remainingTime", time);
}

export function stopTime() {
  clearInterval(intervalId); // Interrompe o intervalo
  sessionStorage.removeItem("remainingTime"); // Limpa o valor do sessionStorage
}

// Inicie o intervalo de tempo e armazene o ID do intervalo na variável intervalId
const intervalId=setInterval(startTime, 1000);