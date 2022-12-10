const numberOfCategories = document.querySelectorAll("#categories>li").length;
console.log(`Number of categories: ${numberOfCategories}`);

const titles = document.querySelectorAll("h2");
//const numberOfItems = document.querySelectorAll(".item ul>li")

titles.forEach((e,i) => 
console.log(
    `Category: ${e.textContent}
    Elements: ${e.nextElementSibling.children.length}`
    ));

//numberOfItems.forEach((e,i) => console.log(`${e.textContent} ${i}`));

//const ul = document.querySelectorAll(".item>ul");

//console.log(ul[0].children.length)
//console.log(ul[1].children.length)
//console.log(ul[2].children.length)


// Zadanie 1
// W HTML znajduje się lista kategorii ul#categories.

// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, 
// czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie 
// i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) 
// i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5