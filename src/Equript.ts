import { MathPlus } from "./libs/Util";

export namespace Equript {
	export class Equation {
		/** 数式内で使用される変数配列 */
		public args: string[];



		public static divideTerms (terms: string): string {
			return terms
				.replace(new RegExp(`(?<=${Equation.Prefix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])(${Equation.SymbolChars.reduce((mem, symbol): string => mem += `|${symbol}`)}|\\w+)(?=${Equation.Suffix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])`, "g"), `*$1*`)
				.replace(new RegExp(`(?<=${Equation.Prefix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])(${Equation.SymbolChars.reduce((mem, symbol): string => mem += `|${symbol}`)}|\\w+)`, "g"), `*$1`)
				.replace(new RegExp(`(${Equation.SymbolChars.reduce((mem, symbol): string => mem += `|${symbol}`)}|\\w+)(?=${Equation.Suffix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])`, "g"), `$1*`);
		}



		/** 方程式を生成します */
		public constructor (public formula: string) {
			this.args = formula.replace(/\s/g, "").match(/[a-zA-Z]/g).filter((arg, index, args): boolean => args.indexOf(arg) === index);
		}

		/** 指定された値を代入した方程式を返します */
		public substitute (args: Equation.EquationArguments = {}): string {
			for (const arg of this.args) args[arg] = (args[arg] != null ? args[arg] : arg);
	
			let result = this.formula
				.replace(new RegExp(`(?<=${Equation.Prefix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])(${Equation.SymbolChars.reduce((mem, symbol): string => mem += `|${symbol}`)}|\\w+)(?=${Equation.Suffix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])`, "g"), `*$1*`)
				.replace(new RegExp(`(?<=${Equation.Prefix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])(${Equation.SymbolChars.reduce((mem, symbol): string => mem += `|${symbol}`)}|\\w+)`, "g"), `*$1`)
				.replace(new RegExp(`(${Equation.SymbolChars.reduce((mem, symbol): string => mem += `|${symbol}`)}|\\w+)(?=${Equation.Suffix_Symbols.reduce((mem, symbol): string => mem += `|${symbol}`)}|[a-zA-Z])`, "g"), `$1*`);
	
			for (const arg in args) result = result.replace(new RegExp(arg, "g"), `${args[arg]}`);
	
			const reversePrefixes = (result.match(/(\+ ?\-|\- ?\-)/g) || []);
			for (const prefix of reversePrefixes) result = result.replace(prefix, prefix.replace(/\s/g, "") == "+-" ? "- " : "+ ");
	
			return result;
		}

		/** 方程式に指定された値を代入して得られた値を返します */
		public get (args: Equation.EquationArguments = {}): number {
			return new Function(...["MathPlus"],
				[
					'"use strict";',
					`return ${this.toSource(args)};`
				].join("\n")
			)(...[MathPlus]);
		}



		/** 方程式をJavaScriptコードに変換したものを返します */
		private toSource (args: Equation.EquationArguments = {}): string {
			let formatted = this.substitute(args);
			for (const symbol in Equation.Symbols) formatted = formatted.replace(new RegExp(symbol, "g"), Equation.Symbols[symbol]);

			return formatted;
		}
	}

	export namespace Equation {
		/** 数式内で利用できる特殊記号一覧 */
		export enum Symbols {
			"√" = "Math.sqrt",
			"π|Π" = "Math.PI",
			"sin" = "Math.sin",
			"cos" = "Math.cos",
			"tan" = "Math.tan",
			"log" = "Math.log",
			"\\|([^|]+)\\|" = "Math.abs($1)",
			"Σ\\(\\s*(?:(\\w+)\\s*=\\s*(\\d+)),\\s*(\\w+)\\)\\(\\s+(.+)\\s+\\)" = "MathPlus.sigma($2, $3, $1 => ($4))"
		}

		/** 単一文字で記される特殊記号一覧 */
		export const SymbolChars: string[] = ["√", "π", "Π", "sin", "cos"];
		/** 後方の乗算記号を省略できる特殊記号一覧 */
		export const Prefix_Symbols: string[] = ["π", "Π"];
		/** 前方の乗算記号を省略できる特殊記号一覧 */
		export const Suffix_Symbols: string[] = ["π", "Π", "√"];

		/** 数式内変数の型 */
		export interface EquationArguments {
			[name: string]: number | string;
		}
	}



	export class Interpreter {
		public constructor (public code: string) {}

		/** 数式記述をJavaScriptコードに変換します */
		public compile (): void {
			new Function(...["Equript"],
				this.code.replace(
					/(?<=[^"']\s*)\$([^\$]+)\$/g,
					'new Equript.Equation("$1")'
				)
			)(...[Equript]);
		}
	}
}

export default Equript;