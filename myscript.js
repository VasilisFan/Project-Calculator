console.log("hey there!");
let operator;
let number1 = "";
let number2 = "";
varDebugger();
let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (x) {
    xClass = this.className;
    xText = this.textContent;
    xId = this.id;
    if (xId === "ac") {
      console.log("mphke ac");
      number1 = "";
      number2 = "";
      operator = undefined;
      document.querySelector("#userInput").innerHTML = String(number1);
      varDebugger();
    } else if (xId === "c") {
      console.log("mphke c");
      if (number2 != "") {
        number2 = "";
      } else {
        operator = undefined;
        number1 = "";
        document.querySelector("#userInput").innerHTML = "";
      }
      varDebugger();
    } else if (xId === "delete") {
      console.log("mphke delete");
      varDebugger();
      if (number2 != "") {
        number2 = number2.slice(0, -1);
        document.querySelector("#userInput").innerHTML = String(number2);
      } else {
        operator = undefined;
        number1 = String(number1);
        number1 = number1.slice(0, -1);
        document.querySelector("#userInput").innerHTML = String(number1);
      }
      varDebugger();
    } else if (xClass.includes("nmbr") && operator === undefined) {
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
  if (num_x > 999999999999999999 || num_z > 999999999999999999) {
    document.querySelector("#userInput").innerHTML = errorMsg;
    number1 = "";
    number2 = "";
  } else if (y === "+") {
    number1 = num_x + num_z;
    document.querySelector("#userInput").innerHTML = String(number1);
  } else if (y === "-") {
    number1 = num_x - num_z;
    document.querySelector("#userInput").innerHTML = String(number1);
  } else if (y === "x") {
    number1 = num_x * num_z;
    document.querySelector("#userInput").innerHTML = String(number1);
  } else if (y === "÷") {
    if (num_z === 0) {
      document.querySelector("#userInput").innerHTML = errorMsg;
    } else {
      number1 = num_x / num_z;
      document.querySelector("#userInput").innerHTML = number1;
    }
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
  number2 += x;
  varDebugger();
  document.querySelector("#userInput").innerHTML = number2;
}

function varDebugger() {
  console.log(
    `number1 = ${number1}, number2 = ${number2}, operator = ${operator}`
  );
}
