const gulp = require("gulp");
const gulp_ts = require("gulp-typescript");
const tsProject = gulp_ts.createProject("./tsconfig.json");

const Tasks = {
	"compile:ts": () => {
		return tsProject.src()
			.pipe(tsProject())
			.js.pipe(gulp.dest("./dist"));
	}
}

gulp.task("default", () => {
	gulp.watch(
		["./src/**/*.ts"],
		
		gulp.parallel(
			"compile:ts"
		)
	);
});

gulp.task("compile:ts", Tasks["compile:ts"]);