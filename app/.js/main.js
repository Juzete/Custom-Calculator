/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <!DOCTYPE html>\n| <html lang=\"en\">\n|   <head>");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);


var buttonPanelElement = document.querySelector(".button-panel");
var outputOperationsElement = document.querySelector(".operation-panel .value");
var outputResultElement = document.querySelector(".result .value");
var themeElements = document.querySelectorAll(".theme");
var memValue = 0;
var isPow = false;
var isRoot = true;
var OPERATORS = ["+", "-", "*", "/"];
var POWER = "POWER(";
var data = {
  operation: [],
  formula: []
};
var calcButtons = [{
  symbol: "AC",
  formula: false,
  type: "key"
}, {
  symbol: "←",
  formula: false,
  type: "key"
}, {
  symbol: "%",
  formula: "/100",
  type: "number"
}, {
  symbol: "÷",
  formula: "/",
  type: "operator"
}, {
  symbol: "x",
  formula: "*",
  type: "operator"
}, {
  symbol: "-",
  formula: "-",
  type: "operator"
}, {
  symbol: "+",
  formula: "+",
  type: "operator"
}, {
  symbol: "=",
  formula: "=",
  type: "calculate"
}, {
  symbol: ".",
  formula: ".",
  type: "number"
}, {
  symbol: 1,
  formula: 1,
  type: "number"
}, {
  symbol: 2,
  formula: 2,
  type: "number"
}, {
  symbol: 3,
  formula: 3,
  type: "number"
}, {
  symbol: 4,
  formula: 4,
  type: "number"
}, {
  symbol: 5,
  formula: 5,
  type: "number"
}, {
  symbol: 6,
  formula: 6,
  type: "number"
}, {
  symbol: 7,
  formula: 7,
  type: "number"
}, {
  symbol: 8,
  formula: 8,
  type: "number"
}, {
  symbol: 9,
  formula: 9,
  type: "number"
}, {
  symbol: 0,
  formula: 0,
  type: "number"
}, {
  symbol: "(",
  formula: "(",
  type: "number"
}, {
  symbol: ")",
  formula: ")",
  type: "number"
}, {
  symbol: "mc",
  formula: false,
  type: "save"
}, {
  symbol: "m+",
  formula: false,
  type: "save"
}, {
  symbol: "m-",
  formula: false,
  type: "save"
}, {
  symbol: "mr",
  formula: false,
  type: "save"
}, {
  name: "powY",
  symbol: "xy",
  formula: POWER,
  type: "math_function"
}, {
  name: "pow2",
  symbol: "x2",
  formula: POWER,
  type: "math_function"
}, {
  name: "pow3",
  symbol: "x3",
  formula: POWER,
  type: "math_function"
}, {
  name: "10powX",
  symbol: "10powX",
  formula: POWER,
  type: "math_function"
}, {
  name: "exp",
  symbol: "ex",
  formula: "Math.exp(",
  type: "math_function"
}, {
  name: "1divX",
  symbol: "1divX",
  formula: "1/(",
  type: "math_function"
}, {
  name: "square-root",
  symbol: "√(",
  formula: "Math.sqrt(",
  type: "math_function"
}, {
  name: "qube-root",
  symbol: "(3)√(",
  formula: "Math.cbrt(",
  type: "math_function"
}, {
  name: "ln",
  symbol: "ln2",
  formula: false,
  type: "math_function"
}, {
  name: "log10",
  symbol: "log10",
  formula: "Math.log(10)",
  type: "math_function"
}, {
  name: "x-root",
  symbol: "√(",
  formula: POWER,
  type: "math_function"
}];
buttonPanelElement.addEventListener("click", function (event) {
  var element = event.target.textContent;
  if (!event.target.closest("button")) return;
  calcButtons.forEach(function (button) {
    if (button.symbol == element) calculator(button);else if (button.name == event.target.id) calculator(button);
  });
});

function calculator(button) {
  if (button.type == "operator") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  } else if (button.type == "number") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
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
    if (button.symbol == "m+") memValue += parseInt(outputResultElement.innerHTML, 10);else if (button.symbol == "m-") memValue -= parseInt(outputResultElement.innerHTML, 10);else if (button.symbol == "mr") updateOutputResult(memValue);else if (button.symbol == "mc") memValue = 0;
  } else if (button.type == "math_function") {
    var symbol, formula;

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
  } else if (button.type == "calculate") {
    var formulaStr = data.formula.join("");

    if (isPow) {
      formulaStr = getPowBase(formulaStr);
      isPow = false;
    }

    updateOutputResult(eval(formulaStr));
    return;
  }

  updateOutputOperation(data.operation.join(""));
}
/* Get Power Base */


function getPowBase(formulaStr) {
  var powerSearchResult = search(data.formula, POWER);
  var BASES = powerBaseGetter(data.formula, powerSearchResult);

  if (isRoot && BASES[0] === "") {
    data.formula.pop();
    data.formula.shift();
    data.formula.unshift("Math.sqrt(");
    data.formula.push(")");
    formulaStr = data.formula.join("");
    isRoot = false;
    return formulaStr;
  } else if (isRoot) {
    BASES.forEach(function (base) {
      var toReplace = base + POWER;
      var replacement = "Math.pow(" + base + "," + "1/";
      formulaStr = formulaStr.replace(toReplace, replacement);
    });
  } else if (BASES[0] === "") {
    var toReplace = POWER;
    var replacement = "Math.pow(10" + ",";
    formulaStr = formulaStr.replace(toReplace, replacement);
  } else {
    BASES.forEach(function (base) {
      var toReplace = base + POWER;
      var replacement = "Math.pow(" + base + ",";
      formulaStr = formulaStr.replace(toReplace, replacement);
    });
  }

  return formulaStr;
}

function powerBaseGetter(formula, powerSearchResult) {
  var powersBases = [];
  powerSearchResult.forEach(function (power_index) {
    var base = [];
    var parenthesesCount = 0;
    var previousIndex = power_index - 1;

    while (previousIndex >= 0) {
      if (formula[previousIndex] == "(") parenthesesCount--;
      if (formula[previousIndex] == ")") parenthesesCount++;
      var isOperator = false;
      OPERATORS.forEach(function (OPERATOR) {
        if (formula[previousIndex] == OPERATOR) isOperator = true;
      });
      var isPower = formula[previousIndex] == POWER;
      if (isOperator && parenthesesCount == 0 || isPower) break;
      base.unshift(formula[previousIndex]);
      previousIndex--;
    }

    powersBases.push(base.join(""));
  });
  return powersBases;
}

function search(array, key) {
  var result = [];
  array.forEach(function (element, index) {
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
  themeElements.forEach(function (item) {
    item.classList.add(color);
  });
}

themeSwitch("dark");
})();

/******/ })()
;
//# sourceMappingURL=main.js.map