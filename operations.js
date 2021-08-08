export const sum = (firstValue, secondValue) => firstValue + secondValue;
export const minus = (firstValue, secondValue) => firstValue - secondValue;
export const multiply = (firstValue, secondValue) => firstValue * secondValue;
export const divide = (firstValue, secondValue) =>
  secondValue == 0 ? "divide by zero" : (firstValue / secondValue).toFixed(5);
export const remainder = (firstValue, secondValue) => firstValue % secondValue;
export const abs = (firstValue, secondValue, solution) => {
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
export const equal = (firstValue) => firstValue;
