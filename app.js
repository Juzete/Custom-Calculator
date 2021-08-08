import {
  sum,
  minus,
  multiply,
  divide,
  remainder,
  abs,
  equal,
} from "./operations.js";
const buttonPanel = document.querySelector(".button-panel");
const result = document.querySelector(".result");
let firstValue = null;
let secondValue = null;
let operator = null;

buttonPanel.addEventListener("click", (event) => {
  const element = event.target.textContent;
  let resultContent = document.querySelector(".result").textContent.trim();

  if (!event.target.closest("button")) return;
  if (event.target.closest(".number"))
    result.innerHTML = numberHandler(element, resultContent);
  if (event.target.closest(".operation"))
    result.innerHTML = operationsHandler(element, resultContent);
});

function numberHandler(input, value) {
  if (value == 0) value = input;
  else if (!Number.isInteger(parseInt(value, 10))) return input;
  else value += input;
  return value;
}

function valueHandler(value) {
  if (!Number.isInteger(parseInt(value, 10))) {
    firstValue = null;
    secondValue = null;
  } else if (Number.isInteger(parseInt(value, 10)) && firstValue === null)
    firstValue = value;
  else if (Number.isInteger(parseInt(value, 10)) && firstValue !== null)
    secondValue = value;
  if (firstValue) firstValue = parseInt(firstValue, 10);
  if (secondValue) secondValue = parseInt(secondValue, 10);
}

function operationsHandler(input, value) {
  let solution;
  valueHandler(value);

  if (firstValue === null && secondValue === null) return input;
  if (secondValue === null) operator = input;

  if (input === "AC") {
    firstValue = null;
    secondValue = null;
    return 0;
  } else if (input === "±") return abs(firstValue, secondValue, solution);

  if (firstValue && secondValue === null) return input;

  if (firstValue !== null && secondValue !== null) {
    switch (operator) {
      case "+":
        solution = sum(firstValue, secondValue);
        firstValue = null;
        secondValue = null;
        return solution;
      case "-":
        solution = minus(firstValue, secondValue);
        firstValue = null;
        secondValue = null;
        return solution;
      case "x":
        solution = multiply(firstValue, secondValue);
        firstValue = null;
        secondValue = null;
        return solution;
      case "÷":
        solution = divide(firstValue, secondValue);
        firstValue = null;
        secondValue = null;
        return solution;
      case "%":
        solution = remainder(firstValue, secondValue);
        firstValue = null;
        secondValue = null;
        return solution;
      case "=":
        return equal(firstValue);
      default:
        break;
    }
  }
}
