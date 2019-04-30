import Equript from "./Equript";

export default class Interpreter {
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