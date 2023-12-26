/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class SalesReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'sales-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This demo shows the sales order details using the table report item.
                    </p>
                    <ul>
                        <li>The table is displayed with a total row, and the sum of sales is calculated by aggregation of
                            <code> OrderQty</code> and <code>UnitPrice</code> data fields using the <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                                target="_blank" rel="noreferrer">Expression</a> support.</li>
                        <li>The <code>Item Total</code> data text box is formatted in <b>Currency </b> <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/format-data/"
                            target="_blank" rel="noreferrer">format</a> to enhance the report design.</li>
                    </ul>
                    <p>
                        More information about the Tablix data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default SalesReport;