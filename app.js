const buttonPanelElement = document.querySelector(".button-panel");
const outputOperationsElement = document.querySelector(
  ".operation-panel .value"
);
const outputResultElement = document.querySelector(".result .value");
const themeElements = document.querySelectorAll(".theme");

let memValue = 0;
const OPERATORS = ["+", "-", "*", "/"];
const POWER = "POWER(";

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
  if (button.type == "operator") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  } else if (button.type == "number") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
    console.log(data);
  } else if (button.type == "key") {
    if (button.symbol == "AC") {
      data.operation = [];
      data.formula = [];
      updateOutputResult(0);
    } else if (button.symbol == "←") {
      data.operation.pop();
      data.formula.pop();
    }
  } else if (button.type == "save") {
    if (button.symbol == "m+")
      memValue += parseInt(outputResultElement.innerHTML, 10);
    else if (button.symbol == "m-")
      memValue -= parseInt(outputResultElement.innerHTML, 10);
    else if (button.symbol == "mr") updateOutputResult(memValue);
    else if (button.symbol == "mc") memValue = 0;
    console.log(memValue);
  } else if (button.type == "math_function") {
    let symbol, formula;
    if (button.name == "powY") {
      symbol = "^(";
      formula = button.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (button.name == "pow2") {
      symbol = "^(";
      formula = button.formula;

      data.operation.push(symbol);
      data.formula.push(formula);

      data.operation.push("2)");
      data.formula.push("2)");
    } else if (button.name == "pow3") {
      symbol = "^(";
      formula = button.formula;

      data.operation.push(symbol);
      data.formula.push(formula);

      data.operation.push("3)");
      data.formula.push("3)");
    }
  } else if (button.type == "calculate") {
    let formulaStr = data.formula.join("");

    let powerSearchResult = search(data.formula, POWER);

    const BASES = powerBaseGetter(data.formula, powerSearchResult);
    BASES.forEach((base) => {
      let toReplace = base + POWER;
      console.log(base);
      let replacement = "Math.pow(" + base + ",";
      console.log(replacement);

      formulaStr = formulaStr.replace(toReplace, replacement);
      console.log(formulaStr, "form");
    });
    console.log(data.formula);
    updateOutputResult(eval(formulaStr));
    return;
  }

  updateOutputOperation(data.operation.join(""));
}

function powerBaseGetter(formula, powerSearchResult) {
  let powers_bases = [];

  powerSearchResult.forEach((power_index) => {
    let base = [];

    let parenthesesCount = 0;

    let previousIndex = power_index - 1;

    while (previousIndex >= 0) {
      if (formula[previousIndex] == "(") parenthesesCount--;
      if (formula[previousIndex] == ")") parenthesesCount++;

      let is_operator = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[previousIndex] == OPERATOR) is_operator = true;
      });

      let is_power = formula[previousIndex] == POWER;

      if ((is_operator && parenthesesCount == 0) || is_power) break;

      base.unshift(formula[previousIndex]);
      previousIndex--;
    }
    powers_bases.push(base.join(""));
  });
  return powers_bases;
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
