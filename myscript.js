console.log("hey there!");

let number1, number2, operator;
let nmbrText = "";
let nmbrText2 = "";
let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (x) {
    xClass = this.className; // console.log(this.textContent);
    xText = this.textContent;
    xId = this.id
    if (xClass.includes("nmbr") && operator === undefined) {
        getFirstNumber(xText);
    }else if(xClass.includes("opr")&&(xId!="equal")){
        number1 = document.querySelector("#userInput").textContent;
        operator = xText;
        varDebugger();
        // console.log(`number1 = ${number1} and operator = ${operator}`);
        //operate(number1, operator, number2);
    }else if (xClass.includes("nmbr") && operator != undefined) {
        number2 = 0;
        getSecondNumber(xText);
    }else{
        number2 = document.querySelector("#userInput").textContent;
        //console.log(`number1 = ${number1}, number2 = ${number2} and operator = ${operator}`);
        varDebugger();
        operate(number1, operator, number2);
    }
   
  });
});

let errorMsg = "False Operation";
function operate(x="",y = operator,z="") {
    let num_x = Number(x);
    let num_z = Number(z);
    nmbrText = 0;
    console.log("mphke operate");
    if(y==="+"){
       nmbrText = num_x + num_z;
       document.querySelector("#userInput").innerHTML = nmbrText;
    }
    number2 = 0; 
}
function getFirstNumber(x) {
    nmbrText += x;
    //console.log(nmbrText);
    varDebugger();
    document.querySelector("#userInput").innerHTML = nmbrText;
}
function getSecondNumber(x) {
    console.log("mphke getSecondNumber");
    nmbrText2 += x;
    //console.log(nmbrText2);
    varDebugger();
    document.querySelector("#userInput").innerHTML = nmbrText2;
}

// operator = document.querySelector(".opr");
// document.querySelector("#userInput").innerHTML = operator;

function varDebugger(){
    console.log(`number1 = ${number1}, number2 = ${number2}, operator = ${operator}, nmbrText = ${nmbrText}, nmbrText2 = ${nmbrText2}`);
}