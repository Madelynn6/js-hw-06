function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const addBtn = document.querySelector('button[data-create]');
const removeBtn = document.querySelector('button[data-destroy]');
const divOuter = document.querySelector("#boxes");



function createBoxes (amount){
  input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
})

  addBtn.addEventListener("click", () =>{
    for(let i=0; i<amount; i++){
      const newDiv = document.createElement("div");
      divOuter.append(newDiv);
      newDiv.style.width = 30 + 10*i + "px";
      newDiv.style.height = 30 + 10*i + "px";
      newDiv.style.backgroundColor = getRandomHexColor();
    }
}
  )
}

function destroyBoxes(){
  removeBtn.addEventListener("click", () => {
    divOuter.innerHTML = ""})
  }


createBoxes();
destroyBoxes();

// Napisz skrypt tworzenia i usuwania kolekcji elementów. 
// Użytkownik wprowadza liczbę elementów do input i naciska przycisk 
// Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku 
// Usuń, kolekcja elementów zostaje usunięta.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. 
// Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

// Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj 
// gotowej funkcji getRandomHexColor aby otrzymać kolor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, 
// tym samym usuwając wszystkie utworzone elementy.