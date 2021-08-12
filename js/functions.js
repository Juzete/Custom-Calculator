const OPERATORS = ["+", "-", "*", "/"];

export function search(array, key) {
    let result = [];
    array.forEach((element, index) => {
      if (element == key) result.push(index);
    });
    return result;
  }
 export function updateOutputOperation(operation, element) {
    element.innerHTML = operation;
  }
 export function updateOutputResult(result,element) {
    element.innerHTML = result;
  }
 export function themeSwitch(color,element) {
    element.forEach(item => item.classList.add(color));
  }


  /* Get Power Base */

 export function getPowBase(formulaStr,data,POWER,isRoot) {
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
  
 export function powerBaseGetter(formula, powerSearchResult,POWER) {
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
  