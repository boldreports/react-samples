import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';

//barcode
import './controls/extensions/report-item-extensions/barcode.reportitem.css';
import { EJBarcode } from './controls/extensions/report-item-extensions/barcode.reportitem';
import { EJQRBarcode } from './controls/extensions/report-item-extensions/qrbarcode.reportitem';

//signature
import './controls/extensions/report-item-extensions/signature.reportitem.css';
import './controls/extensions/report-item-extensions/signature.dialog.css';
import { EJSignature } from './controls/extensions/report-item-extensions/signature.reportitem';
import { SignatureDialog } from './controls/extensions/report-item-extensions/signature.dialog';

let barcode = 'EJBarcode';
let qrBarcode = 'EJQRBarcode';
window[barcode] = EJBarcode;
window[qrBarcode] = EJQRBarcode;

let signature = 'EJSignature';
let signatureDialog = 'SignatureDialog';
window[signature] = EJSignature;
window[signatureDialog] = SignatureDialog;

//code-mirror
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vb/vb';
import './../node_modules/codemirror/lib/codemirror.css';
import './../node_modules/codemirror/addon/hint/show-hint.css';

import * as CodeMirror from 'codemirror';
window['CodeMirror'] = CodeMirror;

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
