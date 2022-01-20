/* eslint-disable */
const fs = require('fs')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const replace = require('gulp-replace')
const autoprefixer = require('gulp-autoprefixer')
const through = require('through2')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

function sass2Css() {
  return gulp
    .src('../src/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('../es'))
}

function copySass() {
  return gulp.src('../src/**/*.scss').pipe(gulp.dest('../es'))
}

function copyIcons() {
  return gulp.src('../src/Icon/icons.js').pipe(gulp.dest('../es/Icon/'))
}

function copyStyle() {
  return gulp
    .src(['../src/**/style/*.js'])
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('../es'))
}

/**
 * 把 es/style/index.css 压缩放到 dist/index.css
 * @returns
 */
function compressCss() {
  return (
    gulp
      .src('../es/**/style/index.css')
      // 2. 压缩文件
      .pipe(cleanCSS())
      .pipe(rename('index.css'))
      // 3. 另存压缩后的文件
      .pipe(gulp.dest('../dist'))
  )
}

function buildFilePathsCache() {
  const paths = []

  return gulp
    .src('../src/**/*.ts')
    .pipe(
      through.obj(function (file, enc, callback) {
        this.push(`${file.path.replace(/\\/g, '/').split('src/').pop()}\n`)
        callback()
      })
    )
    .on('data', function (data) {
      paths.push(data)
    })
    .pipe(fs.createWriteStream('ts-files.txt'))
}

exports.build = gulp.series(sass2Css, copySass, copyStyle, compressCss)
exports.buildFilePathsCache = buildFilePathsCache
exports.copyIcons = copyIcons
