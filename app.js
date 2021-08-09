const buttonPanel_element = document.querySelector(".button-panel");
const output_operations_element = document.querySelector(
  ".operation-panel .value"
);
const output_result_element = document.querySelector(".result .value");
const theme_elements = document.querySelectorAll(".theme");

let memValue = 0;

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
];

buttonPanel_element.addEventListener("click", (event) => {
  const element = event.target.textContent;

  if (!event.target.closest("button")) return;
  calc_buttons.forEach((button) => {
    if (button.symbol == element) calculator(button);
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
  } else if (button.type == "calculate")
    updateOutputResult(eval(data.formula.join("")));
  else if (button.type == "save") {
    if (button.symbol == "m+")
      memValue += parseInt(output_result_element.innerHTML, 10);
    else if (button.symbol == "m-")
      memValue -= parseInt(output_result_element.innerHTML, 10);
    else if (button.symbol == "mr") updateOutputResult(memValue);
    else if (button.symbol == "mc") memValue = 0;
    console.log(memValue);
  }

  updateOutputOperation(data.operation.join(""));
}

function updateOutputOperation(operation) {
  output_operations_element.innerHTML = operation;
}
function updateOutputResult(result) {
  output_result_element.innerHTML = result;
}

/* Theme manager */

function themeSwitch(color) {
  theme_elements.forEach((item) => {
    item.classList.add(color);
  });
}

themeSwitch("dark");
