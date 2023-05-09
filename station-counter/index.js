/*
Initialize count as 0
Listen for clicks on increment button
Increment count variable when button is clicked
Change the count-el in the html to reflect the new count
*/

// document.getElementById("count").innerText = 5
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let num = count + " - ";
    saveEl.textContent += num;
    count = 0;
    countEl.textContent = count;
}