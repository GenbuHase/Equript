const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/Equript.ts",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "Equript.js",

		libraryTarget: "window"
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader"
			}
		]
	},

	resolve: {
		extensions: [".ts"]
	},

	target: "web",
	devtool: "inline-source-map"
};