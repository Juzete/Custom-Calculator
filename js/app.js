// import "../css/style.css"

const buttonPanelElement = document.querySelector(".button-panel");
const outputOperationsElement = document.querySelector(
  ".operation-panel .value"
);
const outputResultElement = document.querySelector(".result .value");
const themeElements = document.querySelectorAll(".theme");

let memValue = 0;
let isPow = false;
let isRoot = false;
const OPERATORS = ["+", "-", "*", "/"];
const POWER = "POWER(";
let formulaStr;

let data = {
  operation: [],
  formula: [],
};


let calcButtons = [
  {
    symbol: "AC",
    formula: false,
    type: "key",
  },
  {
    symbol: "←",
    formula: false,
    type: "key",
  },
  {
    symbol: "%",
    formula: "/100",
    type: "number",
  },
  {
    symbol: "÷",
    formula: "/",
    type: "operator",
  },
  {
    symbol: "x",
    formula: "*",
    type: "operator",
  },
  {
    symbol: "-",
    formula: "-",
    type: "operator",
  },
  {
    symbol: "+",
    formula: "+",
    type: "operator",
  },
  {
    symbol: "=",
    formula: "=",
    type: "calculate",
  },
  {
    symbol: ".",
    formula: ".",
    type: "number",
  },
  {
    symbol: 1,
    formula: 1,
    type: "number",
  },
  {
    symbol: 2,
    formula: 2,
    type: "number",
  },
  {
    symbol: 3,
    formula: 3,
    type: "number",
  },
  {
    symbol: 4,
    formula: 4,
    type: "number",
  },
  {
    symbol: 5,
    formula: 5,
    type: "number",
  },
  {
    symbol: 6,
    formula: 6,
    type: "number",
  },
  {
    symbol: 7,
    formula: 7,
    type: "number",
  },
  {
    symbol: 8,
    formula: 8,
    type: "number",
  },
  {
    symbol: 9,
    formula: 9,
    type: "number",
  },
  {
    symbol: 0,
    formula: 0,
    type: "number",
  },
  {
    symbol: "(",
    formula: "(",
    type: "number",
  },
  {
    symbol: ")",
    formula: ")",
    type: "number",
  },
  {
    symbol: "mc",
    formula: false,
    type: "save",
  },
  {
    symbol: "m+",
    formula: false,
    type: "save",
  },
  {
    symbol: "m-",
    formula: false,
    type: "save",
  },
  {
    symbol: "mr",
    formula: false,
    type: "save",
  },
  {
    name: "powY",
    symbol: "xy",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "pow2",
    symbol: "x2",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "pow3",
    symbol: "x3",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "10powX",
    symbol: "10powX",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "exp",
    symbol: "ex",
    formula: "Math.exp(",
    type: "math_function",
  },
  {
    name: "1divX",
    symbol: "1divX",
    formula: "1/(",
    type: "math_function",
  },
  {
    name: "square-root",
    symbol: "√(",
    formula: "Math.sqrt(",
    type: "math_function",
  },
  {
    name: "qube-root",
    symbol: "(3)√(",
    formula: "Math.cbrt(",
    type: "math_function",
  },
  {
    name: "ln",
    symbol: "ln2",
    formula: false,
    type: "math_function",
  },
  {
    name: "log10",
    symbol: "log10",
    formula: "Math.log(10)",
    type: "math_function",
  },
  {
    name: "x-root",
    symbol: "√(",
    formula: POWER,
    type: "math_function",
  },
];

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
          updateOutputResult(0);
        } else if (button.symbol == "←") {
          data.operation.pop();
          data.formula.pop();
        }
      break;

      case "save":
        if (button.symbol == "m+") memValue += parseInt(outputResultElement.innerHTML, 10);
        else if (button.symbol == "m-") memValue -= parseInt(outputResultElement.innerHTML, 10);
        else if (button.symbol == "mr") updateOutputResult(memValue);
        else if (button.symbol == "mc") memValue = 0;
      break;

      case "math_function":
        let symbol, formula;
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
          formulaStr = getPowBase(formulaStr);
          isPow = false;
        }
        
        console.log(formulaStr);
        formulaStr = "12*5-(5*(32+4))+3";
        console.log(formulaStr);
        console.log(parsePlusSeparatedExpression(formulaStr));
        updateOutputResult(eval(formulaStr));
        return;

    default:
      break;
  }

  updateOutputOperation(data.operation.join(""));
}

/* Parser */

function split(expression, operator) {
  const result = [];
  let braces = 0;
  let currentChunk = "";
  for (let i = 0; i < expression.length; ++i) {
    const curCh = expression[i];
    if (curCh == "(") {
      braces++;
    } else if (curCh == ")") {
      braces--;
    }
    if (braces == 0 && operator == curCh) {
      result.push(currentChunk);
      currentChunk = "";
    } else currentChunk += curCh;
  }
  if (currentChunk != "") {
    result.push(currentChunk);
  }
  return result;
}

function parseMultiplicationSeparatedExpression(expression) {
  const numbersString = split(expression, "*");
  const numbers = numbersString.map((noStr) => {
    if (noStr[0] == "(") {
      const expr = noStr.substr(1, noStr.length - 2);
      return parsePlusSeparatedExpression(expr);
    }
    return +noStr;
  });
  const initialValue = 1.0;
  const result = numbers.reduce((acc, no) => acc * no, initialValue);
  return result;
}

function parseMinusSeparatedExpression(expression) {
  const numbersString = split(expression, "-");
  const numbers = numbersString.map((noStr) =>
    parseMultiplicationSeparatedExpression(noStr)
  );
  const initialValue = numbers[0];
  const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);
  return result;
}

function parsePlusSeparatedExpression(expression) {
  const numbersString = split(expression, "+");
  const numbers = numbersString.map((noStr) =>
    parseMinusSeparatedExpression(noStr)
  );
  const initialValue = 0.0;
  const result = numbers.reduce((acc, no) => acc + no, initialValue);
  return result;
}

/* Get Power Base */
function getPowBase(formulaStr) {
  let powerSearchResult = search(data.formula, POWER);
  const BASES = powerBaseGetter(data.formula, powerSearchResult);
  if (isRoot && BASES[0] === "") {
    data.formula.pop();
    data.formula.shift();
    data.formula.unshift("Math.sqrt(");
    data.formula.push(")");
    formulaStr = data.formula.join("");
    isRoot = false;
    return formulaStr;
  } else if (isRoot) {
    BASES.forEach((base) => {
      let toReplace = base + POWER;
      let replacement = "Math.pow(" + base + "," + "1/";
      formulaStr = formulaStr.replace(toReplace, replacement);
      isRoot = false;
    });
  } else if (BASES[0] === "") {
    let toReplace = POWER;
    let replacement = "Math.pow(10" + ",";
    formulaStr = formulaStr.replace(toReplace, replacement);
  } else {
    BASES.forEach((base) => {
      let toReplace = base + POWER;
      let replacement = "Math.pow(" + base + ",";
      formulaStr = formulaStr.replace(toReplace, replacement);
    });
  }
  return formulaStr;
}

function powerBaseGetter(formula, powerSearchResult) {
  let powersBases = [];

  powerSearchResult.forEach((power_index) => {
    let base = [];
    let parenthesesCount = 0;
    let previousIndex = power_index - 1;

    while (previousIndex >= 0) {
      if (formula[previousIndex] == "(") parenthesesCount--;
      if (formula[previousIndex] == ")") parenthesesCount++;

      let isOperator = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[previousIndex] == OPERATOR) isOperator = true;
      });

      let isPower = formula[previousIndex] == POWER;

      if ((isOperator && parenthesesCount == 0) || isPower) break;

      base.unshift(formula[previousIndex]);
      previousIndex--;
    }
    powersBases.push(base.join(""));
  });
  return powersBases;
}

function search(array, key) {
  let result = [];
  array.forEach((element, index) => {
    if (element == key) result.push(index);
  });
  return result;
}

function updateOutputOperation(operation) {
  outputOperationsElement.innerHTML = operation;
}
function updateOutputResult(result) {
  outputResultElement.innerHTML = result;
}

function themeSwitch(color) {
  themeElements.forEach((item) => {
    item.classList.add(color);
  });
}

themeSwitch("dark");
