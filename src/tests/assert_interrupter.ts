import Equript from "../Equript";

const loader: Equript.Interrupter = new Equript.Interrupter([
	"this.Sigma_Sum = (imports, args = { n: 10 }) => {",
	"	const { Equript } = imports;",
	"	return $Σ(k = 1, n)( k )$;",
	"}",
	"",
	"this.MeasureDistance_BetweenPointAndLine = (imports, args = { a, x, b, y, c }) => {",
	"	const { Equript } = imports;",
	"	return $|ax + by + c| / √((a)**2 + (b)**2)$",
	"}"
].join("\n"));

const wrapper: { [name: string]: Function } = {}
loader.compile(wrapper);

console.log(wrapper.Sigma_Sum({ Equript }));