const adviceEL = document.getElementById("advice");
const adviceBtn = document.getElementById("adviceBtn");

// onload it will run the function and give me a advice

window.onload = generateAdvice();

adviceBtn.addEventListener("click", generateAdvice);
async function generateAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const jsonRes = await res.json();
  const data = jsonRes.slip.advice;
  adviceEL.textContent = data;
}