
let firstNumber = "";
let operator = "";
let secondNumber = "";
let equals = "";
const displayContent = document.querySelector(".display-content");

//disables the decimal button on one click
const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", (event) => {
  decimal.disabled = true;
});  

//creates first number and checks if there is a first num to then move to 2nd num
const digitButton = document.querySelectorAll(".digit-button");
digitButton.forEach((butt) => {
  butt.addEventListener("click", (event) => {
    
    if (firstNumber != "" && operator != ""){
      let num = event.target.textContent;
      secondNumber += num;
      displayContent.textContent = secondNumber;
    } 
    else {
    let num = event.target.textContent;
    firstNumber += num;
    displayContent.textContent = firstNumber;
    }

  });
});



//sets operator
const operatorButton = document.querySelectorAll(".operator");
operatorButton.forEach((butt) => {
  butt.addEventListener("click", (event) => {

    if (operator != "" && secondNumber != ""){
      let restartNum = equalFunction(event);
      firstNumber = Number(restartNum);
      operator = event.target.textContent;
      secondNumber = "";
    }
    else {
      operator = event.target.textContent;
    }

    //turns decimal button back on
    decimal.disabled = false;
  });
});

//when hit equals it links to the calculation of the total
//resets the number variables
const equalButton = document.querySelectorAll(".equals");
equalButton.forEach((butt) => {
  butt.addEventListener("click", (event) => {
    decimal.disabled = false;
    equals = event.target.textContent;
    equalFunction(event);
    firstNumber = "";
    secondNumber = "";
  });
});


//converts string to numbers for calculation and parses to DOM
let equalFunction = function(event){
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber);
  let total = operate(operator);
  displayContent.textContent = total;
  return total;
}


//checks the operator and returns total
let operate = function(operator){
  if (operator == "+"){
    return (firstNumber + secondNumber);
  } 
  else if (operator == "-"){
    return (firstNumber - secondNumber);
  }
  else if (operator == "x"){
    return (firstNumber * secondNumber);
  }
  else if (operator == "÷"){
    return (firstNumber/secondNumber).toFixed(5);
  }
}

//pluses the number or minuses the number when pressed
const plusMinus = document.querySelector("#plusMinus");
plusMinus.addEventListener("click", (event) => {
  let negNumb = true;
  if (negNumb = true) {
    negNumb = false;
    if (secondNumber === ""){
      firstNumber = -firstNumber;
      displayContent.textContent = firstNumber;
    }
    else {
      secondNumber = -secondNumber;
      displayContent.textContent = secondNumber;
    }
  }
  else {
    negNumb = true;
    if (secondNumber === ""){
      firstNumber = firstNumber;
      displayContent.textContent = firstNumber;
    }
    else {
      secondNumber = secondNumber;
      displayContent.textContent = secondNumber;
    }
  }
});


//resets all values
const clearButton = document.querySelectorAll(".clear");
clearButton.forEach((butt) => {
  butt.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    equals = "";
    displayContent.textContent = "0";

  });
});    





