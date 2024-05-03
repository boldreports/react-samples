/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class Invoice extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'invoice.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        In this demo, Invoice report is generated based on <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-parameters/add/"
                            target="_blank" rel="noreferrer">Report Parameters</a> at run time, and it displays the comprehensive overview of an invoice
                        that indicates the shipping order details using parameters, <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank" rel="noreferrer">expressions</a>, and calculated fields with Tablix report item.
                    </p>
                    <ul>
                        <li>Using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank" rel="noreferrer">Expression
                        </a> with text box report item, the report is designed to dynamically display the invoice details.</li>
                        <li>
                            Using the <code>Total</code> feature in table report item, the sum of product price is calculated.
                        </li>
                    </ul>
                    <p>
                        More information about the text box, expressions, and table data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default Invoice;