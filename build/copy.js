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
    shelljs.cp(`${process.cwd()}/src/controls/*.js`, `${process.cwd()}/public/report-viewer/`);
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