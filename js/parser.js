/* Parser */
const OPERATORS = ["+", "-", "*", "/"];

function split(expression, operator) {
    // let deepestBraces = expression;
    // expression.replace(/\([^()]+\)/, (str) =>{deepestBraces=str})
    //  console.log({deepestBraces})
    // const a = deepestBraces.split(new RegExp(`([0-9]+)\\${operator}`)).filter(Boolean);
    // return a;''
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
     console.log({result})
    return result;
  }
  
function parseMultiplicationSeparatedExpression(expression) {
    const numbersString = split(expression, "*");
     console.log(numbersString,"multi")
    let numbers = numbersString.map((noStr) => {
      if (Number.isNaN(+noStr)) return parseDivideSeparatedExpression(noStr);
      return +noStr;
    });
  
    const initialValue = 1.0;
    const result = numbers.reduce((acc, no) => acc * no, initialValue);
    return result;
  }
  
  function parseDivideSeparatedExpression(expression) {
    const numbersString = split(expression.toString(), "/");
     console.log(numbersString,"divide")
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
    console.log(result,"div")
    return result;
  }
  
  
  function parseMinusSeparatedExpression(expression) {
     console.log(expression,"exp minus")
    const numbersString = split(expression, "-");
     console.log(numbersString,"minus")
    const numbers = numbersString.map((noStr) =>
      parseMultiplicationSeparatedExpression(noStr)
    );
     console.log(numbers);

     console.log(numbers)
    const initialValue = numbers[0];
    const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);
    return result;
  }
  
export function parsePlusSeparatedExpression(expression) {
     console.log(expression,"exp plus")
    const numbersString = split(expression, "+");
     console.log(numbersString,"plus")
    const numbers = numbersString.map((noStr) =>{
         console.log({noStr},Number.isNaN(noStr))

     return parseMinusSeparatedExpression(noStr)
    }
    );
    console.log(numbers,"pluse num")
    const result = numbers.reduce((acc, no) =>{
        console.log({acc,no})
      return  +acc + +no
    }, 0);
    return result;
  }