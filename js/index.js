const display = document.querySelector('.display');
const btnEq = document.querySelector('.btn-eq');


document.querySelectorAll(".digits button")
    .forEach( button => document.addEventListener('click', digitPressed) )

function digitPressed(ev) {
    display.value += ev.target.innerText;
}
