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
  console.log(result.innerHTML, "inner");
});

function numberHandler(input, value) {
  if (value == 0) value = input;
  else if (!Number.isInteger(parseInt(value, 10))) return input;
  else value += input;
  return value;
}

function valueHandler(value) {
  if (Number.isInteger(parseInt(value, 10)) && firstValue === null)
    firstValue = value;
  else if (Number.isInteger(parseInt(value, 10)) && firstValue !== null)
    secondValue = value;
  if (firstValue) firstValue = parseInt(firstValue, 10);
  if (secondValue) secondValue = parseInt(secondValue, 10);
  console.log(firstValue, secondValue, " value Handler");
}

function operationsHandler(input, value) {
  let solution;
  valueHandler(value);
  const sum = () => firstValue + secondValue;
  const minus = () => firstValue - secondValue;
  const multiply = () => firstValue * secondValue;
  const divide = () => secondValue == 0 ? "divide by zero" : (firstValue / secondValue).toFixed(5);

  const remainder = () => firstValue % secondValue;
  const abs = () => {
    if (secondValue === null) {
      solution = firstValue * -1;
      firstValue = null;
      return solution;
    } else {
      solution = secondValue * -1;
      secondValue = null;
      return solution;
    }
  };
  const equal = () => firstValue;

  if (secondValue === null) operator = input;

  if (input === "AC") {
    firstValue = null;
    secondValue = null;
    return 0;
  } else if (input === "±") return abs();

  if (firstValue && secondValue === null) return input;

  if (firstValue !== null && secondValue !== null) {
    console.log(firstValue,secondValue,"in switch")
    switch (operator) {
      case "+":
        solution = sum();
        firstValue = null;
        secondValue = null;
        return solution;
      case "-":
        solution = minus();
        firstValue = null;
        secondValue = null;
        return solution;
      case "x":
        console.log("entr in switch");
        solution = multiply();
        firstValue = null;
        secondValue = null;
        return solution;
      case "÷":
        console.log("entr in switch");
        solution = divide();
        firstValue = null;
        secondValue = null;
        return solution;
      case "%":
        solution = remainder();
        firstValue = null;
        secondValue = null;
        return solution;
      case "=":
        return equal();
      default:
        break;
    }
  }
}
