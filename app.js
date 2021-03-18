//selecting html element
let input = document.querySelector(".input");
let liveResult = document.querySelector(".live_result");
let allInputs = document.querySelector(".all_inputs");
let btns = document.querySelector(".buttons");

let equalBtn = document.querySelector(".equal");
let divition = document.querySelector(".div");
let multiply = document.querySelector(".mul");
let subtraction = document.querySelector(".sub");
let addition = document.querySelector(".add");
let clearInput = document.querySelector(".c");
let clearAll = document.querySelector(".ce");
let clearHistory = document.querySelector(".clear_history");

//focus on input evry 10ms
function focus() {
  input.focus();
}
setInterval(focus, 10);
btns.addEventListener("click", (ele) => {
  if (ele.target.hasAttribute("data-value")) {
    input.value += ele.target.dataset.value;
  }
});
//in txt box don't accept more than one dot (in display)
let dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  if (!input.value.includes(".")) {
    input.value += ".";
  }
});
//in txt box don't accept more than one dot (in keyboard)
input.addEventListener("keypress", (event) => {
  let code = event.keyCode;
  if (input.value.includes(".")) {
    if (code == 46) {
      event.preventDefault();
      dot.click();
    }
  }
});
//addition function
function add() {
  let arryOfAllInputs = Array.from(allInputs.value); //converting all inputs arry form
  if (
    arryOfAllInputs[arryOfAllInputs.length - 1] != "+" &&
    input.value.trim() == ""
  ) {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "+";
    allInputs.value = arryOfAllInputs.join("");
  }
  if (input.value.trim() != "") {
    allInputs.value += input.value + "+";
    input.value = "";
    liveRes();
  }
}
//substraction function
function sub() {
  if (input.value.trim() != "") {
    allInputs.value += input.value + "-";
    input.value = "";
    liveRes();
  }
  let arryOfAllInputs = Array.from(allInputs.value);
  if (input.value.trim() == "" && allInputs.value != "") {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "-";
    allInputs.value = arryOfAllInputs.join("");
  }

  if (input.value.trim() == "" && allInputs.value == "") {
    allInputs.value += "-";
  }
}
//multiplication function
function mul() {
  if (input.value.trim() != "") {
    allInputs.value += input.value + "*";
    input.value = "";
    liveResult.value = eval(allInputs.value + "1");
  }
  let arryOfAllInputs = Array.from(allInputs.value);
  if (input.value.trim() == "") {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "*";
    allInputs.value = arryOfAllInputs.join("");
  }
}
//divition function
function div() {
  if (input.value.trim() != "") {
    allInputs.value += input.value + "/";
    input.value = "";
    liveResult.value = eval(allInputs.value + "1");
  }
  let arryOfAllInputs = Array.from(allInputs.value);
  if (input.value.trim() == "") {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "/";
    allInputs.value = arryOfAllInputs.join("");
  }
}
//update result
function liveRes() {
  liveResult.value = eval(allInputs.value + "0");
}
//creating backspace button
function backspace() {
  let inputVal = input.value;
  input.value = inputVal.substring(0, inputVal.length - 1);
}
let backspaceBtn = document.querySelector(".backspace");
backspaceBtn.addEventListener("click", backspace);
//equal function
function equal() {
  if(!input.value && !allInputs.value){
    return 0;
  }
  if (input.value != "") {
    let ulHIs = document.querySelector(".ul_his");
    let li = document.createElement("li");
    li.textContent =
      allInputs.value +
      input.value +
      " = " +
      eval(allInputs.value + String(input.value));
    ulHIs.appendChild(li);

    let arryOfAllInputs = Array.from(allInputs.value);
    let lastOp = arryOfAllInputs[arryOfAllInputs.length - 1];
    input.value = eval(allInputs.value + String(input.value));
    allInputs.value = "";
    liveResult.value = "";
  }
  if (input.value == "") {
    let ulHIs = document.querySelector(".ul_his");
    let arryOfAllInputs = Array.from(allInputs.value);
    arryOfAllInputs.pop();
    let li = document.createElement("li");
    li.textContent = arryOfAllInputs.join("") + " = " + liveResult.value;
    ulHIs.appendChild(li);
    input.value = liveResult.value;
    allInputs.value = "";
    liveResult.value = "";
  }
}
//events lisn=>>
addition.addEventListener("click", add);
subtraction.addEventListener("click", sub);
multiply.addEventListener("click", mul);
divition.addEventListener("click", div);
equalBtn.addEventListener("click", equal);
//enter to run equal function
input.addEventListener("keypress", (event) => {
  let code = event.keyCode;
  if (code == 13) {
    equal();
  }
});
//clearing curent input
clearInput.addEventListener("click", () => {
  input.value = "";
});
//clearing all data
clearAll.addEventListener("click", () => {
  input.value = "";
  allInputs.value = "";
  liveResult.value = "";
});
//clear all history
clearHistory.addEventListener("click", () => {
  clearHistory.parentElement.children[1].innerHTML = "";
});
