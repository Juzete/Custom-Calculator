import {updateOutputOperation, updateOutputResult, themeSwitch, getPowBase} from "./functions.js";
import { calcButtons } from "./calcButtons.js";
import {parsePlusSeparatedExpression} from "./parser.js";

const buttonPanelElement = document.querySelector(".button-panel");
const outputOperationsElement = document.querySelector(
  ".operation-panel .value"
);
const outputResultElement = document.querySelector(".result .value");
const themeElements = document.querySelectorAll(".theme");

let memValue = 0;
let isPow = false;
let isRoot = false;
const POWER = "POWER(";
let formulaStr;
let symbol, formula;

let data = {
  operation: [],
  formula: [],
};

themeSwitch("dark",themeElements);

buttonPanelElement.addEventListener("click", (event) => {
  const element = event.target.textContent;

  if (!event.target.closest("button")) return;
  calcButtons.forEach((button) => {
    if (button.symbol == element) calculator(button);
    else if (button.name == event.target.id) calculator(button);
  });
});

function calculator(button) {
  switch (button.type) {
    case "operator":
      data.operation.push(button.symbol);
      data.formula.push(button.formula);
      break;

      case "number":
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
        break;

      case "key":
        if (button.symbol == "AC") {
          data.operation = [];
          data.formula = [];
          updateOutputResult(0,outputResultElement);
        } else if (button.symbol == "←") {
          data.operation.pop();
          data.formula.pop();
        }
      break;

      case "save":
        if (button.symbol == "m+") memValue += parseInt(outputResultElement.innerHTML, 10);
        else if (button.symbol == "m-") memValue -= parseInt(outputResultElement.innerHTML, 10);
        else if (button.symbol == "mr") updateOutputResult(memValue,outputResultElement);
        else if (button.symbol == "mc") memValue = 0;
      break;

      case "math_function":
        if (button.name == "powY") {
          symbol = "^(";
          formula = button.formula;
          data.operation.push(symbol);
          data.formula.push(formula);
          isPow = true;
        } else if (button.name == "pow2") {
          symbol = "^(";
          formula = button.formula;
          data.operation.push(symbol);
          data.formula.push(formula);
          data.operation.push("2)");
          data.formula.push("2)");
          isPow = true;
        } else if (button.name == "pow3") {
          symbol = "^(";
          formula = button.formula;
          data.operation.push(symbol);
          data.formula.push(formula);
          data.operation.push("3)");
          data.formula.push("3)");
          isPow = true;
        } else if (button.name == "10powX") {
          symbol = "10^(";
          formula = button.formula;
          data.operation.push(symbol);
          data.formula.push(formula);
          isPow = true;
        } else if (button.name == "exp") {
          symbol = "exp(";
          formula = button.formula;
          data.operation.push(symbol);
          data.formula.push(formula);
        } else if (button.name == "1divX") {
          data.operation.push(button.formula);
          data.formula.push(button.formula);
        } else if (button.name == "square-root") {
          data.operation.push(button.symbol);
          data.formula.push(button.formula);
        } else if (button.name == "qube-root") {
          data.operation.push(button.symbol);
          data.formula.push(button.formula);
        } else if (button.name == "ln") {
          data.operation.push(Math.LN2.toFixed(5));
          data.formula.push(Math.LN2.toFixed(5));
        } else if (button.name == "log10") {
          data.operation.push(Math.log(10));
          data.formula.push(button.formula);
        } else if (button.name == "x-root") {
          data.operation.push(button.symbol);
          data.formula.push(button.formula);
          isPow = true;
          isRoot = true;
        }
      break;

      case "calculate":
        formulaStr = data.formula.join("");

        if (isPow) {
          formulaStr = getPowBase(formulaStr,data,POWER,isRoot);
          isPow = false;
        }

        updateOutputResult(parsePlusSeparatedExpression(formulaStr),outputResultElement);
        return;
    default:
      break;
  }
  updateOutputOperation(data.operation.join(""),outputOperationsElement);
}