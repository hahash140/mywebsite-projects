let count = 0;
let figureEl = document.getElementById("figure");
let multipleEl = document.getElementById("txt");

function increament() {
  count += 12;
  figureEl.textContent = count;
  multipleEl.textContent += count + " - ";
}
let firstCard = 3;
let secondCard = 7;
let sum = firstCard + secondCard;
console.log(sum);
if (firstCard <= 4) {
  console.log(0);
}
