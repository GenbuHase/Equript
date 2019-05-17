const gulp = require("gulp");
const gulp_ts = require("gulp-typescript");
const del = require("del");

const tsProject = gulp_ts.createProject("./tsconfig.json");

const Tasks = {
	"compile:core" () {
		return gulp.src(["./src/**/*.ts", "!./src/tests/**/*.ts"])
			.pipe(tsProject())
			.js.pipe(gulp.dest("./dist"));
	},

	"compile:test" () {
		return gulp.src(["./src/tests/**/*.ts"])
			.pipe(tsProject())
			.js.pipe(gulp.dest("./dist/tests"));
	},

	async "clean" () {
		await del(["./dist/**/"]);
	}
};

gulp.task("compile:core", Tasks["compile:core"]);
gulp.task("compile:test", Tasks["compile:test"]);
gulp.task("compile", gulp.series("compile:core", "compile:test"));
gulp.task("clean", Tasks["clean"]);

gulp.task("default", () => {
	gulp.watch(["./src/**/*.ts", "!./src/tests/**/*.ts"], gulp.series("compile:core"));
	gulp.watch("./src/tests/**/*.ts", gulp.series("compile:test"));
});