import Equript from "../Equript";

/**
 * (x - a)² + (y - b)² = r²
 */
const equation1: Equript.Equation = new Equript.Equation("(x - a)**2 + (y - b)**2 - (r)**2");
const equation1_values = { x: "√(3)", a: 0, y: "√(3)", b: 0, r: "√(6)" };

console.log({
	equation: equation1,
	substituted: equation1.substitute(equation1_values),
	value: equation1.get(equation1_values),
	source: equation1.toSource(equation1_values)
});



/**
 * 10
 *  Σ (k) = 55
 * k=1
 */
const equation2: Equript.Equation = new Equript.Equation("Σ(k = 1, 10)( k )");

console.log({
	equation: equation2,
	substituted: equation2.substitute({  }),
	value: equation2.get({  }),
	source: equation2.toSource({  })
});



/**
 * |ax + by + c|
 * -------------
 *  √(a² + b²)
 */
const equation3: Equript.Equation = new Equript.Equation("|ax + by + c| / √((a)**2 + (b)**2)");
const equation3_values = { a: 2, x: 2, b: -3, y: 1, c: 6 };

console.log({
	equation: equation3,
	substituted: equation3.substitute(equation3_values),
	value: equation3.get(equation3_values),
	source: equation3.toSource(equation3_values)
});



console.log(Equript.Equation.divideTerms("(x - a)**2 + (y - b)**2 - |r|**2"));
console.log(Equript.Equation.divideTerms("(a + b) - 2√(ab)"));
console.log(Equript.Equation.divideTerms("(40πr**3) / 3"));
console.log(Equript.Equation.divideTerms("sinAcosB + cosAsinB"));
console.log(Equript.Equation.divideTerms("|ax + by + c| / √((a)**2 + (b)**2)"));