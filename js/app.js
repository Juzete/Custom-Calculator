// import '../style.css';
import {
  updateOutputOperation,
  updateOutputResult,
  themeSwitch,
  getPowBase,
} from "./functions.js";
import { calcButtons } from "./calcButtons.js";
import { parsePlusSeparatedExpression } from "./parser.js";

const buttonPanelElement = document.querySelector(".button-panel");
const outputOperationsElement = document.querySelector(
  ".operation-panel .value"
);
const outputResultElement = document.querySelector(".result .value");
const themeElements = document.querySelector(".theme");

let memValue = 0;
let isPow = false;
let isRoot = false;
const POWER = "POWER(";
let formulaStr;
let regexp = new RegExp(/Math.pow\(([^)]+)\)/g);

let data = {
  operation: [],
  formula: [],
};

themeSwitch("dark", themeElements);

buttonPanelElement.addEventListener("click", (event) => {
  const element = event.target.textContent;
  if (!event.target.closest("button")) return;
  calcButtons.forEach((button) => {
    if (button.symbol == element) calculator(button);
    else if (button.name == event.target.id) calculator(button);
  });
});

const dataPush = (symbol, formula) => {
  data.operation.push(symbol);
  data.formula.push(formula);
};

function calculator(button) {
  switch (button.type) {
    case "operator":
      dataPush(button.symbol, button.formula);
      break;

    case "number":
      dataPush(button.symbol, button.formula);
      break;

    case "key":
      if (button.symbol === "AC") {
        data.operation = [];
        data.formula = [];
        updateOutputResult(0, outputResultElement);
      } else if (button.symbol === "←") {
        data.operation.pop();
        data.formula.pop();
      }
      break;

    case "save":
      memoryFunction(button);
      break;

    case "math_function":
      mathFunctions(button);
      break;

    case "calculate":
      formulaStr = data.formula.join("");
      if (isPow) {
        formulaStr = getPowBase(formulaStr, data, POWER, isRoot);
        isPow = false;
      }

      formulaStr = powReplacer(formulaStr, regexp);

      try {
        parsePlusSeparatedExpression(formulaStr);
      } catch (error) {
        console.error(error);
      }

      if (isNaN(parsePlusSeparatedExpression(formulaStr))) {
        updateOutputResult("reference error", outputResultElement);
      } else if (!isFinite(parsePlusSeparatedExpression(formulaStr))) {
        updateOutputResult("divide by zero", outputResultElement);
      } else {
        updateOutputResult(
          parsePlusSeparatedExpression(formulaStr),
          outputResultElement
        );
      }

      return;

    default:
      break;
  }
  updateOutputOperation(data.operation.join(""), outputOperationsElement);
}

function powReplacer(str, regexp) {
  let array = [...str.matchAll(regexp)];
  let powNum = [];
  array.forEach((item) => {
    let temp = item[1].split(",");
    powNum.push(
      Math.pow(
        parsePlusSeparatedExpression(temp[0]),
        parsePlusSeparatedExpression(temp[1])
      )
    );
  });
  array.forEach(
    (item, index) => (str = str.replace(item[0], powNum[index].toString()))
  );
  return str;
}

function mathFunctions(button) {
  switch (button.name) {
    case "powY":
      dataPush("^(", button.formula);
      isPow = true;
      break;

    case "pow2":
      dataPush("^(", button.formula);
      dataPush("2)", "2)");
      isPow = true;
      break;

    case "pow3":
      dataPush("^(", button.formula);
      dataPush("3)", "3)");
      isPow = true;
      break;

    case "10powX":
      dataPush("10^(", button.formula);
      isPow = true;
      break;

    case "exp":
      dataPush("exp(", button.formula);
      break;

    case "1divX":
      dataPush(button.symbol, button.formula);
      break;

    case "square-root":
      dataPush(button.symbol, button.formula);
      break;

    case "qube-root":
      dataPush(button.symbol, button.formula);
      break;

    case "ln":
      dataPush(Math.LN2.toFixed(5), Math.LN2.toFixed(5));
      break;

    case "log10":
      dataPush(Math.log(10), button.formula);
      data.operation.push(Math.log(10));
      data.formula.push(button.formula);
      break;

    case "x-root":
      dataPush(button.symbol, button.formula);
      isPow = true;
      isRoot = true;
      break;

    default:
      break;
  }
}

function memoryFunction(button) {
  switch (button.symbol) {
    case "m+":
      memValue += parseInt(outputResultElement.innerHTML, 10);
      break;

    case "m-":
      memValue -= parseInt(outputResultElement.innerHTML, 10);
      break;

    case "mr":
      updateOutputResult(memValue, outputResultElement);
      break;

    case "mc":
      memValue = 0;
      break;

    default:
      break;
  }
}
