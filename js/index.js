const display = document.querySelector('.display');
const btnEq = document.querySelector('.btn-eq');
const btnErase = document.querySelector('.btn-erase');
const backSpace = document.querySelector('.backspace');
const addition = document.querySelector('.add')

//CLOCK
setInterval( ()=> {
    document.querySelector('.clock').innerText = (new Date()).toLocaleTimeString();
}, 1000);

//DIGITS
document.querySelectorAll(".digits button")
    .forEach( button => button.addEventListener('click', digitPressed) )


function digitPressed(ev) {
    display.value += ev.target.innerText ;
}

//OPERS
document.querySelectorAll(".opers button")
    .forEach( button => button.addEventListener('click', operPressed) )


function operPressed(ev) {
    display.value += ev.target.innerText ;
}



//EQUAL
btnEq.addEventListener('click', () => display.value = eval(display.value));
//document.querySelector('.btn-eq').addEventListener('click', calculate)
//function calculate() {
//    display.val = eval(display.val);
//}

//ERASER delets on the level of it`s row
btnErase.addEventListener('click', () => display.value = (''));

//BackSpace erases on the level of it`s row
document.querySelector('.backspace').addEventListener('click', backspace)
function backspace() {
   display.value = display.value.substring(0, display.value.length - 1);
}

// //check for double +
// document.querySelector('.add button').addEventListener('click', checkForDoubleAdd)
// function checkForDoubleAdd() {
//     let dispVal = [...display.textContent]
//     for (let elem of dispVal) {
//         if (elem === '+') {
//             elem = ""
//         } else {
//             continue
//         }
//         }
//     return dispVal
// }
