/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class SalesOrderDetail extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'sales-order-detail.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        Sales Order Details shows the sales invoice details using the <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-parameters/add/"
                            target="_blank" rel="noreferrer">report parameters</a>, line report item, and table formatting in Bold Report Viewer.
                    </p>
                    <ul>
                        <li>The Sales Order details are displayed dynamically using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank" rel="noreferrer">expression</a> with the text box report item.</li>
                        <li>The sales order details for each sales order number can be generated based on <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-parameters/add/"
                            target="_blank" rel="noreferrer">Report Parameters</a> at run time.</li>
                    </ul>
                    <p>
                        More information about handling the report items can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default SalesOrderDetail;