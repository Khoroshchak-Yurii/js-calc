const display = document.querySelector(".display");
const btnEq = document.querySelector(".btn-eq");
const btnErase = document.querySelector(".btn-erase");
const backSpace = document.querySelector(".backspace");

//CLOCK
setInterval(() => {
  document.querySelector(".clock").innerText = new Date().toLocaleTimeString();
}, 1000);

//DIGITS
document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

//OPERS
document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", operPressed));

function operPressed(ev) {
  display.value += ev.target.innerText;
}

//EQUAL
//btnEq.addEventListener("click", () => (display.value = eval(display.value)));
document.querySelector(".btn-eq").addEventListener("click", calculate);
function calculate() {
  display.value = eval(display.value);
}

//ERASER delets on the level of it`s row
btnErase.addEventListener("click", () => (display.value = ""));

//BackSpace erases on the level of it`s row
// document.querySelector(".backspace").addEventListener("click", backspace);
// function backspace() {
//   display.value = display.value.substring(0, display.value.length - 1);
// }
backSpace.addEventListener(
  "click",
  () => (display.value = display.value.substring(0, display.value.length - 1))
);

//division by zero
document.querySelector(".div-by-zero").addEventListener("click", divByZero);
function divByZero() {
  let dispContent = eval(display.value);
  if (dispContent == "Infinity") {
    display.value = "";
    return window.alert("C`mon, you can`t divide by zero!");
  }
}

//extra dot
document.querySelector(".dot").addEventListener("click", extraDot);

function extraDot() {
  let dispContent = display.value;
  if (dispContent.includes("..")) {
    display.value = "";
    window.alert("You misspelled smth!");
  }
}

document.querySelector(".add").addEventListener("click", extraAdd);

function extraAdd() {
  let dispContent = display.value;
  if (dispContent.includes("++")) {
    display.value = "";
    window.alert("Can`t be two of these!");
  }
}

document.querySelector(".mult").addEventListener("click", extraMult);

function extraMult() {
  let dispContent = display.value;
  if (dispContent.includes("**")) {
    display.value = "";
    window.alert("Can`t be two of these!");
  }
}

document.querySelector(".minus").addEventListener("click", extraMinus);

function extraMinus() {
  let dispContent = display.value;
  if (dispContent.includes("--")) {
    display.value = "";
    window.alert("Can`t be two of these!");
  }
}

document.querySelector(".divide").addEventListener("click", extraDiv);

function extraDiv() {
  let dispContent = display.value;
  if (dispContent.includes("//")) {
    display.value = "";
    window.alert("Can`t be two of these!");
  }
}

document.querySelector(".power").addEventListener("click", extraPow);

function extraPow() {
  let dispContent = display.value;
  if (dispContent.includes("****")) {
    display.value = "";
    window.alert("Can`t be two of these!");
  }
}
