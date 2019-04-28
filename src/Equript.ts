export namespace Equript {
	export class Equation {
		public args: String[];

		constructor (public formula: String) {
			this.args = formula.replace(/\s/g, "").match(/[a-zA-Z]/g).filter((arg, index, args) => args.indexOf(arg) === index);
		}
	}
}

export default Equript;