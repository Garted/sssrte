"use strict";
//различные плагины галпа
const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

//запуск сервера
gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "src",
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
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream())
  );
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
});
//запускает выполнение задачи в которой выполняются еще задачи паралельно
gulp.task("default", gulp.parallel("watch", "server", "styles"));
