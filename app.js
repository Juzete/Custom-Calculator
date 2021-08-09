const buttonPanel_element = document.querySelector(".button-panel");
const output_operations_element = document.querySelector(
  ".operation-panel .value"
);
const output_result_element = document.querySelector(".result .value");
const theme_elements = document.querySelectorAll(".theme");

let memValue = 0;
const OPERATORS = ["+", "-", "*", "/"];
const POWER = "POWER(";

let data = {
  operation: [],
  formula: [],
};

let calc_buttons = [
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
];

buttonPanel_element.addEventListener("click", (event) => {
  const element = event.target.textContent;

  if (!event.target.closest("button")) return;
  calc_buttons.forEach((button) => {
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
      memValue += parseInt(output_result_element.innerHTML, 10);
    else if (button.symbol == "m-")
      memValue -= parseInt(output_result_element.innerHTML, 10);
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
    }
  } else if (button.type == "calculate") {
    let formula_str = data.formula.join("");

    let POWER_SEARCH_RESULT = search(data.formula, POWER);

    const BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT);
    BASES.forEach((base) => {
      let toReplace = base + POWER;
      console.log(base);
      let replacement = "Math.pow(" + base + ",";
      console.log(replacement);

      formula_str = formula_str.replace(toReplace, replacement);
      console.log(formula_str, "form");
    });
    console.log(data.formula);
    updateOutputResult(eval(formula_str));
    return;
  }

  updateOutputOperation(data.operation.join(""));
}

function powerBaseGetter(formula, POWER_SEARCH_RESULT) {
  let powers_bases = [];

  POWER_SEARCH_RESULT.forEach((power_index) => {
    let base = [];

    let parentheses_count = 0;

    let previous_index = power_index - 1;

    while (previous_index >= 0) {
      if (formula[previous_index] == "(") parentheses_count--;
      if (formula[previous_index] == ")") parentheses_count++;

      let is_operator = false;
      OPERATORS.forEach((OPERATOR) => {
        if (formula[previous_index] == OPERATOR) is_operator = true;
      });

      let is_power = formula[previous_index] == POWER;

      if ((is_operator && parentheses_count == 0) || is_power) break;

      base.unshift(formula[previous_index]);
      previous_index--;
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
  output_operations_element.innerHTML = operation;
}
function updateOutputResult(result) {
  output_result_element.innerHTML = result;
}

function themeSwitch(color) {
  theme_elements.forEach((item) => {
    item.classList.add(color);
  });
}

themeSwitch("dark");
