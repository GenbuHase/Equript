export namespace Equript {
	export class Equation {
		public args: string[];

		/** 公式を生成します */
		constructor (public formula: string) {
			this.args = formula.replace(/\s/g, "").match(/[a-zA-Z]/g).filter((arg, index, args) => args.indexOf(arg) === index);
		}

		/** 指定された値を代入した方程式を返します */
		public substitute (args: { [name: string]: number } = {}) {
			for (const arg of this.args) args[arg] = args[arg] || 0;
	
			let result = this.formula;
	
			for (const arg in args) {
				const value = args[arg];
	
				result = result
					.replace(new RegExp(`(?<=\\w)${arg}(?=\\w)`, "g"), `*${value}*`)
					.replace(new RegExp(`(?<=\\w)${arg}`, "g"), `*${value}`)
					.replace(new RegExp(`${arg}(?=\\w)`, "g"), `${value}*`)
					.replace(new RegExp(arg, "g"), value + "");
			}
	
			const reversePrefixes = (result.match(/(\+ ?\-|\- ?\-)/g) || []);
			for (const prefix of reversePrefixes) result = result.replace(prefix, prefix.replace(/\s/g, "") == "+-" ? "- " : "+ ");
	
			return result;
		}
	}
}

export default Equript;