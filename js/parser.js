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
    let numbers = numbersString.map((noStr) => {
      if (noStr[0] == "(") {
        const expr = noStr.substr(1, noStr.length - 2);
        return parsePlusSeparatedExpression(expr);
      }
      return +noStr;
    });
  
    if (isNaN(numbers[0])) {
      return numbers = parseDivideSeparatedExpression(numbersString);
    }
  
    const initialValue = 1.0;
    const result = numbers.reduce((acc, no) => acc * no, initialValue);
    return result;
  }
  
  function parseDivideSeparatedExpression(expression) {
    const numbersString = split(expression.toString(), "/");
    const numbers = numbersString.map((noStr) => {
      if (noStr[0] == "(") {
        const expr = noStr.substr(1, noStr.length - 2);
        return parsePlusSeparatedExpression(expr);
      }
      return +noStr;
    });
    const result = numbers.reduce((acc, no,index) =>{
      if (index == 0) return;
      return acc / no;
  
    },);
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
    const result = numbers.reduce((acc, no) => acc + no, 0);
    return result;
  }