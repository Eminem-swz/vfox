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
    .pipe(gulp.dest('../lib'))
}

function copySass() {
  return gulp
    .src('../src/**/*.scss')
    .pipe(gulp.dest('../es'))
    .pipe(gulp.dest('../lib'))
}

/**
 * style/index 转为 lib/style/index es/style/index
 * @returns
 */
function buildStyleImport() {
  return gulp
    .src('../src/**/style/index.js')
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('../es'))
    .pipe(
      replace(/import\s+\'([\w\.\/\-]+)\'/g, function (p, a) {
        return `require('${a}')`
      })
    )
    .pipe(gulp.dest('../lib'))
}

/**
 * style/index 转为 lib/style/sass es/style/sass
 * @returns
 */
function buildSassImport() {
  return gulp
    .src('../src/**/style/index.js')
    .pipe(replace(/style\/index/g, 'style/sass'))
    .pipe(
      rename(function (path) {
        path.basename = 'sass'
        return path
      })
    )
    .pipe(gulp.dest('../es'))
    .pipe(
      replace(/import\s+\'([\w\.\/\-]+)\'/g, function (p, a) {
        return `require('${a}')`
      })
    )
    .pipe(gulp.dest('../lib'))
}

/**
 * 把 es/style/index.css 压缩放到 dist/index.css
 * @returns
 */
function compressCss() {
  return (
    gulp
      .src('../es/style/index.css')
      // 2. 压缩文件
      .pipe(cleanCSS())
      .pipe(rename('index.css'))
      // 3. 另存压缩后的文件
      .pipe(gulp.dest('../dist'))
  )
}

function copyDeclaration() {
  return gulp.src('../es/**/*.d.ts').pipe(gulp.dest('../lib'))
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

function copyIcons() {
  return gulp
    .src('../src/Icon/icons.js')
    .pipe(gulp.dest('../es/Icon/'))
    .pipe(gulp.dest('../lib/Icon/'))
}

exports.build = gulp.series(
  sass2Css,
  copySass,
  buildStyleImport
  // buildSassImport
)
exports.buildFilePathsCache = buildFilePathsCache
exports.copyIcons = copyIcons
exports.copyDeclaration = copyDeclaration
exports.compressCss = compressCss
