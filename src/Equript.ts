import { Math_Plus } from "./libs/Util";

export namespace Equript {
	export class Equation {
		/** 数式内で使用される変数配列 */
		public args: string[];



		static divideTerms (terms: string) {
			return terms
				.replace(new RegExp(`(?<=\\w)(\\d)+(?=[\\w√])`, "g"), `*$1*`)
				.replace(new RegExp(`(?<=[\\w√])(\\d)+`, "g"), `*$1`)
				.replace(new RegExp(`(\\d)+(?=[\\w√])`, "g"), `$1*`);
		}



		/** 方程式を生成します */
		constructor (public formula: string) {
			this.args = formula.replace(/\s/g, "").match(/[a-zA-Z]/g).filter((arg, index, args) => args.indexOf(arg) === index);
		}

		/** 指定された値を代入した方程式を返します */
		public substitute (args: Equation.EquationArguments = {}) {
			for (const arg of this.args) args[arg] = args[arg] || 0;
	
			let result = this.formula;
	
			for (const arg in args) {
				const value = Equation.divideTerms(args[arg] as string);
	
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

		/** 方程式に指定された値を代入して得られた値を返します */
		public get (args: Equation.EquationArguments = {}) {
			return new Function(`"use strict"; return ${this.toSource(args)}`)();
		}



		/** 方程式をJavaScriptコードに変換したものを返します */
		private toSource (args: Equation.EquationArguments = {}) {
			let formatted = this.substitute(args);
			for (const symbol in Equation.Symbols) formatted = formatted.replace(new RegExp(symbol, "g"), Equation.Symbols[symbol]);
			
			return formatted;
		}
	}

	export namespace Equation {
		/** 数式内で利用できる特殊記号一覧 */
		export enum Symbols {
			"√" = "Math.sqrt",
			"\\|([^|]+)\\|" = "Math.abs($1)",
			"Σ\\(\\s*([])\\)\\(\\)" = ""
		}

		/** 数式内変数の型 */
		export type EquationArguments = {
			[name: string]: number | string;
		}
	}

	export class Interrupter {
		constructor (public code: string) {
			
		}
	}
}

export default Equript;