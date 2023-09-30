"use strict";
//различные плагины галпа
const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");

//запуск сервера
gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
  });
  //отслеживание файлов с расширением html и обновление страницы
  gulp.watch("src/*.html").on("change", browserSync.reload);
});
//работа со стилями
gulp.task("styles", function () {
  return (
    gulp
      //отслеживает файлы по пути
      .src("src/sass/**/*.+(scss|sass)")
      // сжимает файлы
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      //переименовывает файлы
      .pipe(rename({ suffix: ".min", prefix: "" }))
      //автопрефикс
      .pipe(autoprefixer())
      .pipe(cleanCSS({ compatibility: "ie8" }))
      //слаживает файлы в папку по пути
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream())
  );
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/*.html").on("change", gulp.parallel("html"));
});
gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("scripts", function () {
  return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("icons", function () {
  return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("img", function () {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

//запускает выполнение задачи в которой выполняются еще задачи паралельно
gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "html",
    "scripts",
    "fonts",
    "icons",
    "img"
  )
);
