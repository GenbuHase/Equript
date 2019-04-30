import * as fs from "fs";
import * as util from "util";

import Equript from "../Equript";

(() => {
	const path: string = process.argv[2];
	if (!path) throw new ReferenceError("Make sure to provide a path of script");

	util.promisify(fs.readFile)(path).catch(err => {
		throw err;
	}).then(data => {
		const script: string = data.toString();
		const interpreter: Equript.Interpreter = new Equript.Interpreter(script);

		interpreter.compile();
	});
})();
