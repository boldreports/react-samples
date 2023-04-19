import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import './globals';
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reportdesigner.min.css';
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';

//barcode
import './controls/extensions/report-item-extensions/barcode.reportitem.css';
import { EJBarcode } from './controls/extensions/report-item-extensions/barcode.reportitem';
import { EJQRBarcode } from './controls/extensions/report-item-extensions/qrbarcode.reportitem';

let barcode = 'EJBarcode';
let qrBarcode = 'EJQRBarcode';
window[barcode] = EJBarcode;
window[qrBarcode] = EJQRBarcode;

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