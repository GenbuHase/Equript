(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Equript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Equript.ts":
/*!************************!*\
  !*** ./src/Equript.ts ***!
  \************************/
/*! exports provided: Equript, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equript", function() { return Equript; });
/* harmony import */ var _libs_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/Util */ "./src/libs/Util.ts");

var Equript;
(function (Equript) {
    var Equation = /** @class */ (function () {
        /** 方程式を生成します */
        function Equation(formula) {
            this.formula = formula;
            this.args = formula.replace(/\s/g, "").match(/[a-zA-Z]/g).filter(function (arg, index, args) { return args.indexOf(arg) === index; });
        }
        Equation.divideTerms = function (terms) {
            return terms
                .replace(new RegExp("(?<=" + Equation.Prefix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])(" + Equation.SymbolChars.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|\\w+)(?=" + Equation.Suffix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])", "g"), "*$1*")
                .replace(new RegExp("(?<=" + Equation.Prefix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])(" + Equation.SymbolChars.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|\\w+)", "g"), "*$1")
                .replace(new RegExp("(" + Equation.SymbolChars.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|\\w+)(?=" + Equation.Suffix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])", "g"), "$1*");
        };
        /** 指定された値を代入した方程式を返します */
        Equation.prototype.substitute = function (args) {
            if (args === void 0) { args = {}; }
            for (var _i = 0, _a = this.args; _i < _a.length; _i++) {
                var arg = _a[_i];
                args[arg] = (args[arg] != null ? args[arg] : arg);
            }
            var result = this.formula
                .replace(new RegExp("(?<=" + Equation.Prefix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])(" + Equation.SymbolChars.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|\\w+)(?=" + Equation.Suffix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])", "g"), "*$1*")
                .replace(new RegExp("(?<=" + Equation.Prefix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])(" + Equation.SymbolChars.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|\\w+)", "g"), "*$1")
                .replace(new RegExp("(" + Equation.SymbolChars.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|\\w+)(?=" + Equation.Suffix_Symbols.reduce(function (mem, symbol) { return mem += "|" + symbol; }) + "|[a-zA-Z])", "g"), "$1*");
            for (var arg in args)
                result = result.replace(new RegExp(arg, "g"), "" + args[arg]);
            var reversePrefixes = (result.match(/(\+ ?\-|\- ?\-)/g) || []);
            for (var _b = 0, reversePrefixes_1 = reversePrefixes; _b < reversePrefixes_1.length; _b++) {
                var prefix = reversePrefixes_1[_b];
                result = result.replace(prefix, prefix.replace(/\s/g, "") == "+-" ? "- " : "+ ");
            }
            return result;
        };
        /** 方程式に指定された値を代入して得られた値を返します */
        Equation.prototype.get = function (args) {
            if (args === void 0) { args = {}; }
            return new (Function.bind.apply(Function, [void 0].concat(["MathPlus"], [[
                    '"use strict";',
                    "return " + this.toSource(args) + ";"
                ].join("\n")])))().apply(void 0, [_libs_Util__WEBPACK_IMPORTED_MODULE_0__["MathPlus"]]);
        };
        /** 方程式をJavaScriptコードに変換したものを返します */
        Equation.prototype.toSource = function (args) {
            if (args === void 0) { args = {}; }
            var formatted = this.substitute(args);
            for (var symbol in Equation.Symbols)
                formatted = formatted.replace(new RegExp(symbol, "g"), Equation.Symbols[symbol]);
            return formatted;
        };
        return Equation;
    }());
    Equript.Equation = Equation;
    (function (Equation) {
        /** 数式内で利用できる特殊記号一覧 */
        var Symbols;
        (function (Symbols) {
            Symbols["\u221A"] = "Math.sqrt";
            Symbols["\u03C0|\u03A0"] = "Math.PI";
            Symbols["sin"] = "Math.sin";
            Symbols["cos"] = "Math.cos";
            Symbols["tan"] = "Math.tan";
            Symbols["log"] = "Math.log";
            Symbols["\\|([^|]+)\\|"] = "Math.abs($1)";
            Symbols["\u03A3\\(\\s*(?:(\\w+)\\s*=\\s*(\\d+)),\\s*(\\w+)\\)\\(\\s+(.+)\\s+\\)"] = "MathPlus.sigma($2, $3, $1 => ($4))";
        })(Symbols = Equation.Symbols || (Equation.Symbols = {}));
        /** 単一文字で記される特殊記号一覧 */
        Equation.SymbolChars = ["√", "π", "Π", "sin", "cos"];
        /** 後方の乗算記号を省略できる特殊記号一覧 */
        Equation.Prefix_Symbols = ["π", "Π"];
        /** 前方の乗算記号を省略できる特殊記号一覧 */
        Equation.Suffix_Symbols = ["π", "Π", "√"];
    })(Equation = Equript.Equation || (Equript.Equation = {}));
    var Interpreter = /** @class */ (function () {
        function Interpreter(code) {
            this.code = code;
        }
        /** 数式記述をJavaScriptコードに変換します */
        Interpreter.prototype.compile = function () {
            new (Function.bind.apply(Function, [void 0].concat(["Equript"], [this.code.replace(/(?<=[^"']\s*)\$([^\$]+)\$/g, 'new Equript.Equation("$1")')])))().apply(void 0, [Equript]);
        };
        return Interpreter;
    }());
    Equript.Interpreter = Interpreter;
})(Equript || (Equript = {}));
/* harmony default export */ __webpack_exports__["default"] = (Equript);


/***/ }),

/***/ "./src/libs/Util.ts":
/*!**************************!*\
  !*** ./src/libs/Util.ts ***!
  \**************************/
/*! exports provided: MathPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathPlus", function() { return MathPlus; });
var MathPlus;
(function (MathPlus) {
    /**
     * Σの計算を行います
     *
     *  to
     *   Σ(k)
     * k=from
     *
     * @param {number} from 初項の序数
     * @param {number} to 末項の序数
     * @param {(k?: number) => number} [formula] 計算に使用する数式
     */
    function sigma(from, to, formula) {
        if (formula === void 0) { formula = function (k) { return k; }; }
        var sum = 0;
        for (var k = from; k <= to; k++)
            sum += formula(k);
        return sum;
    }
    MathPlus.sigma = sigma;
})(MathPlus || (MathPlus = {}));


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VxdXJpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUF1QztBQUVoQyxJQUFVLE9BQU8sQ0FvR3ZCO0FBcEdELFdBQWlCLE9BQU87SUFDdkI7UUFlQyxnQkFBZ0I7UUFDaEIsa0JBQTJCLE9BQWU7WUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFjLFdBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDOUgsQ0FBQztRQVphLG9CQUFXLEdBQXpCLFVBQTJCLEtBQWE7WUFDdkMsT0FBTyxLQUFLO2lCQUNWLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBYSxVQUFHLElBQUksTUFBSSxNQUFRLEVBQW5CLENBQW1CLENBQUMsbUJBQWMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFhLFVBQUcsSUFBSSxNQUFJLE1BQVEsRUFBbkIsQ0FBbUIsQ0FBQyxpQkFBWSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQWEsVUFBRyxJQUFJLE1BQUksTUFBUSxFQUFuQixDQUFtQixDQUFDLGVBQVksRUFBRSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUM7aUJBQ2hULE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBYSxVQUFHLElBQUksTUFBSSxNQUFRLEVBQW5CLENBQW1CLENBQUMsbUJBQWMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFhLFVBQUcsSUFBSSxNQUFJLE1BQVEsRUFBbkIsQ0FBbUIsQ0FBQyxXQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO2lCQUNuTixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQWEsVUFBRyxJQUFJLE1BQUksTUFBUSxFQUFuQixDQUFtQixDQUFDLGlCQUFZLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBYSxVQUFHLElBQUksTUFBSSxNQUFRLEVBQW5CLENBQW1CLENBQUMsZUFBWSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ROLENBQUM7UUFTRCwwQkFBMEI7UUFDbkIsNkJBQVUsR0FBakIsVUFBbUIsSUFBcUM7WUFBckMsZ0NBQXFDO1lBQ3ZELEtBQWtCLFVBQVMsRUFBVCxTQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTO2dCQUF0QixJQUFNLEdBQUc7Z0JBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFBO1lBRS9FLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUN2QixPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQWEsVUFBRyxJQUFJLE1BQUksTUFBUSxFQUFuQixDQUFtQixDQUFDLG1CQUFjLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBYSxVQUFHLElBQUksTUFBSSxNQUFRLEVBQW5CLENBQW1CLENBQUMsaUJBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFhLFVBQUcsSUFBSSxNQUFJLE1BQVEsRUFBbkIsQ0FBbUIsQ0FBQyxlQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDO2lCQUNoVCxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQWEsVUFBRyxJQUFJLE1BQUksTUFBUSxFQUFuQixDQUFtQixDQUFDLG1CQUFjLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBYSxVQUFHLElBQUksTUFBSSxNQUFRLEVBQW5CLENBQW1CLENBQUMsV0FBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztpQkFDbk4sT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFhLFVBQUcsSUFBSSxNQUFJLE1BQVEsRUFBbkIsQ0FBbUIsQ0FBQyxpQkFBWSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxNQUFNLElBQWEsVUFBRyxJQUFJLE1BQUksTUFBUSxFQUFuQixDQUFtQixDQUFDLGVBQVksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVyTixLQUFLLElBQU0sR0FBRyxJQUFJLElBQUk7Z0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7WUFFdEYsSUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDakUsS0FBcUIsVUFBZSxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlO2dCQUEvQixJQUFNLE1BQU07Z0JBQXFCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBQTtZQUV2SCxPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUM7UUFFRCxnQ0FBZ0M7UUFDekIsc0JBQUcsR0FBVixVQUFZLElBQXFDO1lBQXJDLGdDQUFxQztZQUNoRCxZQUFXLFFBQVEsWUFBUixRQUFRLGtCQUFJLENBQUMsVUFBVSxDQUFDLEdBQ2xDO29CQUNDLGVBQWU7b0JBQ2YsWUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFHO2lCQUNoQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQ1IsQ0FBQyxtREFBUSxDQUFDLEVBQUU7UUFDbEIsQ0FBQztRQUlELG9DQUFvQztRQUM1QiwyQkFBUSxHQUFoQixVQUFrQixJQUFxQztZQUFyQyxnQ0FBcUM7WUFDdEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxLQUFLLElBQU0sTUFBTSxJQUFJLFFBQVEsQ0FBQyxPQUFPO2dCQUFFLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFeEgsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztRQUNGLGVBQUM7SUFBRCxDQUFDO0lBeERZLGdCQUFRLFdBd0RwQjtJQUVELFdBQWlCLFFBQVE7UUFDeEIsc0JBQXNCO1FBQ3RCLElBQVksT0FTWDtRQVRELFdBQVksT0FBTztZQUNsQiwrQkFBaUI7WUFDakIsb0NBQWlCO1lBQ2pCLDJCQUFrQjtZQUNsQiwyQkFBa0I7WUFDbEIsMkJBQWtCO1lBQ2xCLDJCQUFrQjtZQUNsQix5Q0FBZ0M7WUFDaEMsd0hBQTBHO1FBQzNHLENBQUMsRUFUVyxPQUFPLEdBQVAsZ0JBQU8sS0FBUCxnQkFBTyxRQVNsQjtRQUVELHNCQUFzQjtRQUNULG9CQUFXLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkUsMEJBQTBCO1FBQ2IsdUJBQWMsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCwwQkFBMEI7UUFDYix1QkFBYyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQU16RCxDQUFDLEVBeEJnQixRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQXdCeEI7SUFJRDtRQUNDLHFCQUEyQixJQUFZO1lBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFHLENBQUM7UUFFM0MsK0JBQStCO1FBQ3hCLDZCQUFPLEdBQWQ7WUFDQyxLQUFJLFFBQVEsWUFBUixRQUFRLGtCQUFJLENBQUMsU0FBUyxDQUFDLEdBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNoQiw0QkFBNEIsRUFDNUIsNEJBQTRCLENBQzVCLHFCQUNHLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDakIsQ0FBQztRQUNGLGtCQUFDO0lBQUQsQ0FBQztJQVpZLG1CQUFXLGNBWXZCO0FBQ0YsQ0FBQyxFQXBHZ0IsT0FBTyxLQUFQLE9BQU8sUUFvR3ZCO0FBRWMsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hHdkI7QUFBQTtBQUFPLElBQVUsUUFBUSxDQWtCeEI7QUFsQkQsV0FBaUIsUUFBUTtJQUN4Qjs7Ozs7Ozs7OztPQVVHO0lBQ0gsU0FBZ0IsS0FBSyxDQUFFLElBQVksRUFBRSxFQUFVLEVBQUUsT0FBMkQ7UUFBM0QsOENBQW1DLENBQVUsSUFBYSxRQUFDLEVBQUQsQ0FBQztRQUMzRyxJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUxlLGNBQUssUUFLcEI7QUFDRixDQUFDLEVBbEJnQixRQUFRLEtBQVIsUUFBUSxRQWtCeEIiLCJmaWxlIjoiRXF1cmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0VxdXJpcHQudHNcIik7XG4iLCJpbXBvcnQgeyBNYXRoUGx1cyB9IGZyb20gXCIuL2xpYnMvVXRpbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFcXVyaXB0IHtcclxuXHRleHBvcnQgY2xhc3MgRXF1YXRpb24ge1xyXG5cdFx0LyoqIOaVsOW8j+WGheOBp+S9v+eUqOOBleOCjOOCi+WkieaVsOmFjeWIlyAqL1xyXG5cdFx0cHVibGljIGFyZ3M6IHN0cmluZ1tdO1xyXG5cclxuXHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBkaXZpZGVUZXJtcyAodGVybXM6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHRcdHJldHVybiB0ZXJtc1xyXG5cdFx0XHRcdC5yZXBsYWNlKG5ldyBSZWdFeHAoYCg/PD0ke0VxdWF0aW9uLlByZWZpeF9TeW1ib2xzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFthLXpBLVpdKSgke0VxdWF0aW9uLlN5bWJvbENoYXJzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFxcXFx3KykoPz0ke0VxdWF0aW9uLlN1ZmZpeF9TeW1ib2xzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFthLXpBLVpdKWAsIFwiZ1wiKSwgYCokMSpgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKG5ldyBSZWdFeHAoYCg/PD0ke0VxdWF0aW9uLlByZWZpeF9TeW1ib2xzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFthLXpBLVpdKSgke0VxdWF0aW9uLlN5bWJvbENoYXJzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFxcXFx3KylgLCBcImdcIiksIGAqJDFgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke0VxdWF0aW9uLlN5bWJvbENoYXJzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFxcXFx3KykoPz0ke0VxdWF0aW9uLlN1ZmZpeF9TeW1ib2xzLnJlZHVjZSgobWVtLCBzeW1ib2wpOiBzdHJpbmcgPT4gbWVtICs9IGB8JHtzeW1ib2x9YCl9fFthLXpBLVpdKWAsIFwiZ1wiKSwgYCQxKmApO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0LyoqIOaWueeoi+W8j+OCkueUn+aIkOOBl+OBvuOBmSAqL1xyXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yIChwdWJsaWMgZm9ybXVsYTogc3RyaW5nKSB7XHJcblx0XHRcdHRoaXMuYXJncyA9IGZvcm11bGEucmVwbGFjZSgvXFxzL2csIFwiXCIpLm1hdGNoKC9bYS16QS1aXS9nKS5maWx0ZXIoKGFyZywgaW5kZXgsIGFyZ3MpOiBib29sZWFuID0+IGFyZ3MuaW5kZXhPZihhcmcpID09PSBpbmRleCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIOaMh+WumuOBleOCjOOBn+WApOOCkuS7o+WFpeOBl+OBn+aWueeoi+W8j+OCkui/lOOBl+OBvuOBmSAqL1xyXG5cdFx0cHVibGljIHN1YnN0aXR1dGUgKGFyZ3M6IEVxdWF0aW9uLkVxdWF0aW9uQXJndW1lbnRzID0ge30pOiBzdHJpbmcge1xyXG5cdFx0XHRmb3IgKGNvbnN0IGFyZyBvZiB0aGlzLmFyZ3MpIGFyZ3NbYXJnXSA9IChhcmdzW2FyZ10gIT0gbnVsbCA/IGFyZ3NbYXJnXSA6IGFyZyk7XHJcblx0XHJcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzLmZvcm11bGFcclxuXHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAoPzw9JHtFcXVhdGlvbi5QcmVmaXhfU3ltYm9scy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxbYS16QS1aXSkoJHtFcXVhdGlvbi5TeW1ib2xDaGFycy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxcXFxcdyspKD89JHtFcXVhdGlvbi5TdWZmaXhfU3ltYm9scy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxbYS16QS1aXSlgLCBcImdcIiksIGAqJDEqYClcclxuXHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAoPzw9JHtFcXVhdGlvbi5QcmVmaXhfU3ltYm9scy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxbYS16QS1aXSkoJHtFcXVhdGlvbi5TeW1ib2xDaGFycy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxcXFxcdyspYCwgXCJnXCIpLCBgKiQxYClcclxuXHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAoJHtFcXVhdGlvbi5TeW1ib2xDaGFycy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxcXFxcdyspKD89JHtFcXVhdGlvbi5TdWZmaXhfU3ltYm9scy5yZWR1Y2UoKG1lbSwgc3ltYm9sKTogc3RyaW5nID0+IG1lbSArPSBgfCR7c3ltYm9sfWApfXxbYS16QS1aXSlgLCBcImdcIiksIGAkMSpgKTtcclxuXHRcclxuXHRcdFx0Zm9yIChjb25zdCBhcmcgaW4gYXJncykgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobmV3IFJlZ0V4cChhcmcsIFwiZ1wiKSwgYCR7YXJnc1thcmddfWApO1xyXG5cdFxyXG5cdFx0XHRjb25zdCByZXZlcnNlUHJlZml4ZXMgPSAocmVzdWx0Lm1hdGNoKC8oXFwrID9cXC18XFwtID9cXC0pL2cpIHx8IFtdKTtcclxuXHRcdFx0Zm9yIChjb25zdCBwcmVmaXggb2YgcmV2ZXJzZVByZWZpeGVzKSByZXN1bHQgPSByZXN1bHQucmVwbGFjZShwcmVmaXgsIHByZWZpeC5yZXBsYWNlKC9cXHMvZywgXCJcIikgPT0gXCIrLVwiID8gXCItIFwiIDogXCIrIFwiKTtcclxuXHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHQvKiog5pa556iL5byP44Gr5oyH5a6a44GV44KM44Gf5YCk44KS5Luj5YWl44GX44Gm5b6X44KJ44KM44Gf5YCk44KS6L+U44GX44G+44GZICovXHJcblx0XHRwdWJsaWMgZ2V0IChhcmdzOiBFcXVhdGlvbi5FcXVhdGlvbkFyZ3VtZW50cyA9IHt9KTogbnVtYmVyIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiguLi5bXCJNYXRoUGx1c1wiXSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnXCJ1c2Ugc3RyaWN0XCI7JyxcclxuXHRcdFx0XHRcdGByZXR1cm4gJHt0aGlzLnRvU291cmNlKGFyZ3MpfTtgXHJcblx0XHRcdFx0XS5qb2luKFwiXFxuXCIpXHJcblx0XHRcdCkoLi4uW01hdGhQbHVzXSk7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHQvKiog5pa556iL5byP44KSSmF2YVNjcmlwdOOCs+ODvOODieOBq+WkieaPm+OBl+OBn+OCguOBruOCkui/lOOBl+OBvuOBmSAqL1xyXG5cdFx0cHJpdmF0ZSB0b1NvdXJjZSAoYXJnczogRXF1YXRpb24uRXF1YXRpb25Bcmd1bWVudHMgPSB7fSk6IHN0cmluZyB7XHJcblx0XHRcdGxldCBmb3JtYXR0ZWQgPSB0aGlzLnN1YnN0aXR1dGUoYXJncyk7XHJcblx0XHRcdGZvciAoY29uc3Qgc3ltYm9sIGluIEVxdWF0aW9uLlN5bWJvbHMpIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKG5ldyBSZWdFeHAoc3ltYm9sLCBcImdcIiksIEVxdWF0aW9uLlN5bWJvbHNbc3ltYm9sXSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZm9ybWF0dGVkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IG5hbWVzcGFjZSBFcXVhdGlvbiB7XHJcblx0XHQvKiog5pWw5byP5YaF44Gn5Yip55So44Gn44GN44KL54m55q6K6KiY5Y+35LiA6KanICovXHJcblx0XHRleHBvcnQgZW51bSBTeW1ib2xzIHtcclxuXHRcdFx0XCLiiJpcIiA9IFwiTWF0aC5zcXJ0XCIsXHJcblx0XHRcdFwiz4B8zqBcIiA9IFwiTWF0aC5QSVwiLFxyXG5cdFx0XHRcInNpblwiID0gXCJNYXRoLnNpblwiLFxyXG5cdFx0XHRcImNvc1wiID0gXCJNYXRoLmNvc1wiLFxyXG5cdFx0XHRcInRhblwiID0gXCJNYXRoLnRhblwiLFxyXG5cdFx0XHRcImxvZ1wiID0gXCJNYXRoLmxvZ1wiLFxyXG5cdFx0XHRcIlxcXFx8KFtefF0rKVxcXFx8XCIgPSBcIk1hdGguYWJzKCQxKVwiLFxyXG5cdFx0XHRcIs6jXFxcXChcXFxccyooPzooXFxcXHcrKVxcXFxzKj1cXFxccyooXFxcXGQrKSksXFxcXHMqKFxcXFx3KylcXFxcKVxcXFwoXFxcXHMrKC4rKVxcXFxzK1xcXFwpXCIgPSBcIk1hdGhQbHVzLnNpZ21hKCQyLCAkMywgJDEgPT4gKCQ0KSlcIlxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiDljZjkuIDmloflrZfjgafoqJjjgZXjgozjgovnibnmroroqJjlj7fkuIDopqcgKi9cclxuXHRcdGV4cG9ydCBjb25zdCBTeW1ib2xDaGFyczogc3RyaW5nW10gPSBbXCLiiJpcIiwgXCLPgFwiLCBcIs6gXCIsIFwic2luXCIsIFwiY29zXCJdO1xyXG5cdFx0LyoqIOW+jOaWueOBruS5l+eul+iomOWPt+OCkuecgeeVpeOBp+OBjeOCi+eJueauiuiomOWPt+S4gOimpyAqL1xyXG5cdFx0ZXhwb3J0IGNvbnN0IFByZWZpeF9TeW1ib2xzOiBzdHJpbmdbXSA9IFtcIs+AXCIsIFwizqBcIl07XHJcblx0XHQvKiog5YmN5pa544Gu5LmX566X6KiY5Y+344KS55yB55Wl44Gn44GN44KL54m55q6K6KiY5Y+35LiA6KanICovXHJcblx0XHRleHBvcnQgY29uc3QgU3VmZml4X1N5bWJvbHM6IHN0cmluZ1tdID0gW1wiz4BcIiwgXCLOoFwiLCBcIuKImlwiXTtcclxuXHJcblx0XHQvKiog5pWw5byP5YaF5aSJ5pWw44Gu5Z6LICovXHJcblx0XHRleHBvcnQgaW50ZXJmYWNlIEVxdWF0aW9uQXJndW1lbnRzIHtcclxuXHRcdFx0W25hbWU6IHN0cmluZ106IG51bWJlciB8IHN0cmluZztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0ZXhwb3J0IGNsYXNzIEludGVycHJldGVyIHtcclxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvciAocHVibGljIGNvZGU6IHN0cmluZykge31cclxuXHJcblx0XHQvKiog5pWw5byP6KiY6L+w44KSSmF2YVNjcmlwdOOCs+ODvOODieOBq+WkieaPm+OBl+OBvuOBmSAqL1xyXG5cdFx0cHVibGljIGNvbXBpbGUgKCk6IHZvaWQge1xyXG5cdFx0XHRuZXcgRnVuY3Rpb24oLi4uW1wiRXF1cmlwdFwiXSxcclxuXHRcdFx0XHR0aGlzLmNvZGUucmVwbGFjZShcclxuXHRcdFx0XHRcdC8oPzw9W15cIiddXFxzKilcXCQoW15cXCRdKylcXCQvZyxcclxuXHRcdFx0XHRcdCduZXcgRXF1cmlwdC5FcXVhdGlvbihcIiQxXCIpJ1xyXG5cdFx0XHRcdClcclxuXHRcdFx0KSguLi5bRXF1cmlwdF0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1cmlwdDsiLCJleHBvcnQgbmFtZXNwYWNlIE1hdGhQbHVzIHtcclxuXHQvKipcclxuXHQgKiDOo+OBruioiOeul+OCkuihjOOBhOOBvuOBmVxyXG5cdCAqIFxyXG5cdCAqICB0b1xyXG5cdCAqICAgzqMoaylcclxuXHQgKiBrPWZyb21cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gZnJvbSDliJ3poIXjga7luo/mlbBcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdG8g5pyr6aCF44Gu5bqP5pWwXHJcblx0ICogQHBhcmFtIHsoaz86IG51bWJlcikgPT4gbnVtYmVyfSBbZm9ybXVsYV0g6KiI566X44Gr5L2/55So44GZ44KL5pWw5byPXHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHNpZ21hIChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIGZvcm11bGE6IChrPzogbnVtYmVyKSA9PiBudW1iZXIgPSAoaz86IG51bWJlcik6IG51bWJlciA9PiBrKTogbnVtYmVyIHtcclxuXHRcdGxldCBzdW06IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBrOiBudW1iZXIgPSBmcm9tOyBrIDw9IHRvOyBrKyspIHN1bSArPSBmb3JtdWxhKGspO1xyXG5cclxuXHRcdHJldHVybiBzdW07XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==