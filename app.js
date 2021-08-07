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
  if (Number.isInteger(parseInt(value, 10)) && firstValue === null)
    firstValue = value;
  else if (Number.isInteger(parseInt(value, 10)) && firstValue !== null)
    secondValue = value;
  firstValue ? (firstValue = parseInt(firstValue, 10)) : null;
  secondValue ? (secondValue = parseInt(secondValue, 10)) : null;
}

function operationsHandler(input, value) {
  console.log(input);
  valueHandler(value);
  const sum = () => firstValue + secondValue;
  const minus = () => firstValue - secondValue;
  const multiply = () => firstValue * secondValue;
  const divide = () => firstValue / secondValue;
  const remainder = () => firstValue % secondValue;
  const abs = () => {
    if (secondValue === null) return firstValue * -1;
    else return secondValue * -1;
  };
  const equal = () => firstValue;

  if (!secondValue) operator = input;

  if (input === "AC") {
    firstValue = null;
    secondValue = null;
    return 0;
  } else if (input === "±") return abs();

  if (firstValue && secondValue) {
    switch (operator) {
      case "+":
        firstValue = sum();
        secondValue = null;
        operator = input;
        return firstValue;
      case "-":
        firstValue = minus();
        secondValue = null;
        operator = input;
        return firstValue;
      case "x":
        firstValue = multiply();
        secondValue = null;
        operator = input;
        return firstValue;
      case "÷":
        firstValue = divide();
        secondValue = null;
        operator = input;
        return firstValue;
      case "%":
        firstValue = remainder();
        secondValue = null;
        operator = input;
        return firstValue;
      case "=":
        operator = input;
        return equal();
      default:
        break;
    }
  }

  return input;
}
