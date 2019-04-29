export namespace Math_Plus {
	/**
	 * Σの計算を行います
	 * 
	 *  to
	 *   Σ(k)
	 * k=from
	 * 
	 * @param {number} from 初項の序数
	 * @param {number} to 末項の序数
	 * @param {(k?: number) => number} [formula] 計算に使用する数式
	 */
	export function sigma (from: number, to: number, formula: (k?: number) => number = (k?: number) => k) : number {
		let sum: number = 0;
		for (let k: number = from; k <= to; k++) sum += formula(k);

		return sum;
	}
}