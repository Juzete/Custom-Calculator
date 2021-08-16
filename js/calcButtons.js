const POWER = "POWER(";
export let calcButtons = [
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
