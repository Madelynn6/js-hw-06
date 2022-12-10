let counterValue = 0;
const buttonDec = document.querySelector('button[data-action="decrement"]')
const buttonInc = document.querySelector('button[data-action="increment"]')

buttonDec.addEventListener("click", dec)
function dec(){
    counterValue-=1;
    document.querySelector("#value").innerHTML = counterValue;
}

buttonInc.addEventListener("click", inc)
function inc(){
    counterValue+=1;
    document.querySelector("#value").innerHTML = counterValue;
}





// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, 
// powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna 
// wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj 
// i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.