var firstNum = "";
var secondNum = "";
var operator = "";
var resulted = false;

var operatorButtons = document.getElementsByClassName("operator");
var clearButton = document.getElementById("clear");
var resultButton = document.getElementById("result");
var calc_window = document.getElementById("calc_window");

Array.from(document.getElementsByClassName("number")).forEach(function(button) {
    button.addEventListener("click", function() {
        if (resulted) {
            clearCalc();
            resulted = false;
        }
        calc_window.innerText += button.innerText;
        if (operator === "") {
            firstNum += button.innerText;
        } else {
            secondNum += button.innerText;
        }
    });
});

Array.from(operatorButtons).forEach(function(button) {
    button.addEventListener("click", function() {
        if (operator === "") { 
            operator = button.innerText;
            calc_window.innerText += " " + operator + "  ";
        }
    });
});

function clearCalc() {
    firstNum = "";
    secondNum = "";
    operator = "";
    calc_window.innerText = "";
};

clearButton.addEventListener("click", function() {
    clearCalc();
});

resultButton.addEventListener("click", function() {
    if (firstNum !== "" && secondNum !== "" && operator !== "") {
        var result;
        var num1 = parseFloat(firstNum);
        var num2 = parseFloat(secondNum);
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result = "Error: Division by 0";
                    break;
                } else {
                    result = num1 / num2;
                }
                break;
        }
        calc_window.innerText = result;
        resulted = true;
    }
});