var gulp = require("gulp"),
  sass = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  pug = require("gulp-pug"),
  prettyHtml = require("gulp-pretty-html");

gulp.task("sass", function() {
  gulp
  .src("src/sass/main.scss")
  .pipe(plumber())
  .pipe(sass({ outputStyle: "expanded" }))
  .pipe(gulp.dest("src/css"));
});

gulp.task("pug", function() {
  gulp
  .src("src/pug/*.pug")
  .pipe(pug())
  .pipe(prettyHtml({ indent_size: 2, extra_liners: [] }))
  .pipe(gulp.dest("src"));
});

gulp.task("watch", ["sass", "pug"], function() {
  gulp.watch("src/sass/**/*.scss", ["sass"]);
  gulp.watch("src/index.html");
  gulp.watch("src/pug/*.pug", ["pug"]);
});

gulp.task("build", function() {
  var buildCss = gulp.src(["src/css/*.css"]).pipe(gulp.dest("build/css"));
  var buildCss = gulp.src(["src/images/*.*"]).pipe(gulp.dest("build/images"));
  var buildHtml = gulp.src("src/*.html").pipe(gulp.dest("build"));
});


