const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');
var shelljs = require('shelljs');

gulp.task('pre-build', function (done) {
    runSequence('update-barcode', 'clean','copy-dependent-scripts', 'copy-src-assets', done);
})

gulp.task('build', function (done) {
    if (shelljs.exec('npm run build')) {
        console.log('******* Build Successfully *******');
        done();
    }
    else
        process.exit(1);
})

gulp.task('clean', function (done) {
    shelljs.rm('-rf', 'dist');
    done();
})