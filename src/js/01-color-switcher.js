// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://www.jscamp.app/ru/docs/javascript25/
// https://uk.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81_Unix
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startbtnEl = document.querySelector('button[data-start]');
const stopbtnEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");
console.log(startbtnEl);
let timerId = null;
stopbtnEl.setAttribute('disabled', 'true');

startbtnEl.addEventListener("click", changeColor);
function changeColor() { 
  
  timerId = setInterval(() => { bodyEl.style.backgroundColor = getRandomHexColor() }, 1000);
  startbtnEl.setAttribute('disabled', 'true');
  stopbtnEl.removeAttribute('disabled');
};

stopbtnEl.addEventListener("click", () => {
  clearInterval(timerId);
  startbtnEl.removeAttribute('disabled');
  stopbtnEl.setAttribute('disabled', 'true');
});
