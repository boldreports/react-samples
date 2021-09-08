const gulp = require('gulp');
var shelljs = require('shelljs');

gulp.task('copy-src-assets', function (done) {
    shelljs.mkdir(`${process.cwd()}/public/report-viewer`);       
    shelljs.cp(`${process.cwd()}/src/controls/*.js`, `${process.cwd()}/public/report-viewer/`);   
    done(); 
});