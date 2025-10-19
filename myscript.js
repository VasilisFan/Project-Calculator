console.log("hey there!");
let operator;
let number1 = "";
let number2 = "";
let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (x) {
    xClass = this.className; // console.log(this.textContent);
    xText = this.textContent;
    xId = this.id;
    if (xClass.includes("nmbr") && operator === undefined) {
      getFirstNumber(xText);
    } else if (xClass.includes("opr") && xId != "equal") {
      operator = xText;
      varDebugger();
      if (number2 != "") {
        operate(number1, operator, number2);
      }
    } else if (xClass.includes("nmbr") && operator != undefined) {
      getSecondNumber(xText);
    } else {
      varDebugger();
      operate(number1, operator, number2);
    }
  });
});

let errorMsg = "False Operation";

function operate(x = "", y = operator, z = "") {
  console.log("mphke operate"); ///
  varDebugger();
  let num_x = Number(x);
  let num_z = Number(z);
  if (y === "+") {
    number1 = num_x + num_z;
    document.querySelector("#userInput").innerHTML = number1;
  }
  number2 = "";
}

function getFirstNumber(x) {
  number1 += x;
  console.log("mphke getFirstNumber");
  varDebugger();
  document.querySelector("#userInput").innerHTML = number1;
}

function getSecondNumber(x) {
  console.log("mphke getSecondNumber");
  //number2 += Number(x);
  number2 += x;
  varDebugger();
  document.querySelector("#userInput").innerHTML = number2;
}

function varDebugger() {
  console.log(
    `number1 = ${number1}, number2 = ${number2}, operator = ${operator}`
  );
}
