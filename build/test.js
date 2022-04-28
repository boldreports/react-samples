const gulp = require('gulp');
var shelljs = require('shelljs')

gulp.task('lint', function (done) {
  let output = shelljs.exec('eslint src/**/*.js');
  if (output.stdout.indexOf('ERROR') !== -1) {
    process.exit(1);
  }
  done();
});

gulp.task('test', gulp.series(['lint', 'file-validation', 'seo-validation']));