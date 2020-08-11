// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');

// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const babel = require("gulp-babel");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const svgSymbols = require('gulp-svg-symbols');
const beeper = require('beeper');
const notify = require('gulp-notify');


const themePath = './web/themes/custom/andy';
const source = {
  scss: `${themePath}/src/scss/*.scss`,
  js: `${themePath}/src/js/*.js`,
  svg: `${themePath}/src/svg/*.svg`,
}
const dist = {
  css: `${themePath}/assets/css`,
  js: `${themePath}/assets/js`,
  svg: `${themePath}/assets/img`,
}

function scssTask() {
  return src([source.scss])
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', onError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(dist.css));
}


function jsTask() {
  return src([source.js]) // Can exclude files with ![filename]
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(dest(dist.js));
}

function svgTask() {
  return src([source.svg])
    .pipe(svgSymbols({
      id: 'icon-%f',
      templates: ['default-svg'],
      title: '%f',
      slug: function (name) {
        return name.toLowerCase().trim().replace(/\s/g, '-');
      }
    }))
    .pipe(dest(dist.svg));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watching = true;
  watch([source.scss, source.js, source.svg],
    parallel(scssTask, jsTask, svgTask));
}

// Error Handling
watching = false;

function onError(err) {
  notify({
    title: 'Task failed',
    message: 'See the terminal for details.',
  });
  beeper();
  console.log(`
**************************************************

    ${err.name}!

    See ${err.filename} on line ${err.line}, column ${err.col}.
    ------------------------------
    ${err.message}

**************************************************
  `);
  if (watching) {
    this.emit('end');
  } else {
    process.exit(1);
  }
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// Then runs watch task
exports.default = series(
  parallel(scssTask, jsTask, svgTask),
  watchTask
);

exports.styles = series(scssTask);
exports.scripts = series(jsTask);
exports.shapes = series(svgTask);
exports.compile = parallel(scssTask, jsTask, svgTask);