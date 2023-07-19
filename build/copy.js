const gulp = require('gulp');
var shelljs = require('shelljs');
const fs = require('fs');

const barcodeDir = './src/controls/extensions/report-item-extensions/';
const barcodeTeml = {
    '1D': 'export { EJBarcode };',
    '2D': 'export { EJQRBarcode };'
};

gulp.task('copy-src-assets', function (done) {
    shelljs.mkdir(`${process.cwd()}/public/report-viewer`);
    copyFile(`${process.cwd()}/src/controls/*.js`, `${process.cwd()}/public/report-viewer/`);
    done();
});

gulp.task('copy-dependent-scripts', function (done) {
    shelljs.mkdir('-p',`${process.cwd()}/public/assets/scripts`);
    var dependentScriptLocation = `${process.cwd()}/public/assets/scripts`;
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/common/ej2-base.min.js`,dependentScriptLocation);
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/common/ej2-data.min.js`,dependentScriptLocation);
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/common/ej2-pdf-export.min.js`,dependentScriptLocation);
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/common/ej2-svg-base.min.js`,dependentScriptLocation);
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej2-lineargauge.min.js`,dependentScriptLocation);
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej2-circulargauge.min.js`,dependentScriptLocation);
    copyFile(`${process.cwd()}/node_modules/@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej2-maps.min.js`,dependentScriptLocation);
    done();
});

gulp.task('update-barcode', (done) => {
    if (fs.existsSync(`${barcodeDir}barcode.reportitem.js`) && fs.existsSync(`${barcodeDir}qrbarcode.reportitem.js`)) {
        var barcode = fs.readFileSync(`${barcodeDir}barcode.reportitem.js`);
        var qrbarcode = fs.readFileSync(`${barcodeDir}qrbarcode.reportitem.js`);
        if (!barcode.includes(barcodeTeml['1D']))
            fs.writeFileSync(`${barcodeDir}barcode.reportitem.js`, `${barcode} \n ${barcodeTeml['1D']}`);
        if (!qrbarcode.includes(barcodeTeml['2D']))
            fs.writeFileSync(`${barcodeDir}qrbarcode.reportitem.js`, `${qrbarcode} \n ${barcodeTeml['2D']}`);
        done();
    }
    else {
        console.log(`!!!... The Barcode files not found in ${barcodeDir} ...!!!`);
        process.exit(1);
    }
});

function copyFile(from , to){
    shelljs.cp(from, to);
}