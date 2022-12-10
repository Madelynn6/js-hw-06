function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");

btn.addEventListener("click", change);

function change(){
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}


// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez 
// style inline po kliknięciu na button.change-color i wprowadza 
// wartość koloru do span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }