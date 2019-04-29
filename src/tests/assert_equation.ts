import Equript from "../Equript";

/**
 * (x - a)² + (y - b)² = r²
 */
const equation: Equript.Equation = new Equript.Equation("(x - a)**2 + (y - b)**2 - r**2");

/**
 * 10
 *  Σ (k) = 55
 * k=1
 */
const equation2: Equript.Equation = new Equript.Equation("Σ(k = 1, 10)( k )");

// Σ\(\s*(?:([\w]+)\s*=\s*(\d+)),\s*(\d+)\)\(\s+(.+)\s+\)
// Math_Plus.sigma($2, $3, $1 => ($4))

// console.log(equation);
// console.log(equation.substitute({ x: "√(3)", a: 0, y: "√(3)", b: 0, r: "3√(2)" }));
// console.log(equation.get({ x: "√(3)", a: 0, y: "√(3)", b: 0, r: "3√(2)" }));
console.log(Equript.Equation.divideTerms("(x - a)**2 + (y - b)**2 - |r|**2"));
console.log(Equript.Equation.divideTerms("(a + b) - 2√(ab)"));
console.log(Equript.Equation.divideTerms("(4πr**3) / 3"));
console.log(Equript.Equation.divideTerms("sinαcosβ + cosαsinβ"));

/*console.log(equation2);
console.log(equation2.substitute({ }));
console.log(equation2.toSource({ }));
console.log(equation2.get({ }));*/