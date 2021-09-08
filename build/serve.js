const gulp = require('gulp');
var shelljs = require('shelljs');
var argv = require('yargs').argv;

gulp.task('serve', function () {
    argv.port ? shelljs.exec(`SET PORT=${argv.port} && npm run start`) : shelljs.exec('npm run start');
});