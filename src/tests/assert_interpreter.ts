import Equript from "../Equript";

const loader: Equript.Interpreter = new Equript.Interpreter([
	"const Sigma_Sum = (n = 10) => {",
	"	return $Σ(k = 1, n)( k )$.get({ n });",
	"}",
	"",
	"const MeasureDistance_BetweenPointAndLine = (args = { a, x, b, y, c }) => {",
	"	return $|ax + by + c| / √((a)**2 + (b)**2)$.get(args)",
	"}",
	"",
	"console.log(Sigma_Sum(100));",
	"console.log(MeasureDistance_BetweenPointAndLine({ a: 2, x: 2, b: -3, y: 1, c: 6 }));"
].join("\n"));

loader.compile();