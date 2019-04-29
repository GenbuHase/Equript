import Equript from "../Equript";

/**
 * (x - a)² + (y - b)² = r²
 */
const equation: Equript.Equation = new Equript.Equation("(x - a)**2 + (y - b)**2 - r**2");

// Σ(k = 1, 10)(k) = 55

console.log(equation);
// console.log(equation.substitute({ x: "√(3)", a: 0, y: "√(3)", b: 0, r: "3√(2)" }));
// console.log(equation.get({ x: "√(3)", a: 0, y: "√(3)", b: 0, r: "3√(2)" }));
console.log(Equript.Equation.divideTerms("3√(2)"));
console.log(Equript.Equation.divideTerms("(x - a)**2 + (y - b)**2 - |r|**2"));
console.log(Equript.Equation.divideTerms("( 2√(2) )**2"));
console.log(Equript.Equation.divideTerms("(a + b) - 2√(ab)"));