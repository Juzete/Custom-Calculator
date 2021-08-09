const buttonPanel_element = document.querySelector(".button-panel");
const result_element = document.querySelector(".result");
const theme_elements = document.querySelectorAll(".theme");

let data = {
  operation : [],
  formula : [],
}

let calc_buttons = [
  {
    symbol : "AC",
    formula : false,
    type : "key"
  },
  {
    symbol : "±",
    formula : "*(-1)",
    type : "number"
  },
  {
    symbol : "%",
    formula : "/100",
    type : "number"
  },
  {
    symbol : "÷",
    formula : "/",
    type : "operator"
  },
  {
    symbol : "x",
    formula : "*",
    type : "operator"
  },
  {
    symbol : "-",
    formula : "-",
    type : "operator"
  },
  {
    symbol : "+",
    formula : "+",
    type : "operator"
  },
  {
    symbol : "=",
    formula : "=",
    type : "calculate"
  },
  {
    symbol : ".",
    formula : ".",
    type : "number"
},
{
  symbol : 1,
  formula : 1,
  type : "number"
},
{
  symbol : 2,
  formula : 2,
  type : "number"
},
{
  symbol : 3,
  formula : 3,
  type : "number"
},
{
  symbol : 4,
  formula : 4,
  type : "number"
},
{
  symbol : 5,
  formula : 5,
  type : "number"
},
{
  symbol : 6,
  formula : 6,
  type : "number"
},
{
  symbol : 7,
  formula : 7,
  type : "number"
},
{
  symbol : 8,
  formula : 8,
  type : "number"
},
{
  symbol : 9,
  formula : 9,
  type : "number"
},
{
  symbol : 0,
  formula : 0,
  type : "number"
},
]


buttonPanel_element.addEventListener("click", (event) => {
  const element = event.target.textContent;

  if (!event.target.closest("button")) return;
  
  calc_buttons.forEach(button => {
    if(button.symbol == element) console.log(element);
  })
});



/* Theme manager */

function themeSwitch(color) {
  theme_elements.forEach((item) => {
    item.classList.add(color);
  });
}

themeSwitch("dark");
