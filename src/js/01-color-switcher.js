function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startbtnEl = document.querySelector('button[data-start]');
const stopbtnEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");
console.log(startbtnEl);
startbtnEl.addEventListener("click", changeColor);
// stopbtnEl.addEventListener("click", );

function changeColor (evt) {
    const color = getRandomHexColor();
    console.log(color);
  bodyEl.style.backgroundColor = color;
};
