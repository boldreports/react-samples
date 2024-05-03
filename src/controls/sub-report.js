/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class SubReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'sub-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        Sales Order Details by Order Number shows the order details using the <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-parameters/add/"
                                                                                        target="_blank" rel="noreferrer">report parameters</a>, sub report item, and table formatting in Bold Report Viewer.
                    </p>
                    <ul>
                        <li>
                            The sales order details are displayed dynamically using the <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/subreport/"
                                                                                    target="_blank" rel="noreferrer">sub report</a>  item.
                        </li>
                        <li>
                            The sales order details for a specific date range can be generated based on <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-parameters/add/"
                                                                                                            target="_blank" rel="noreferrer">Report Parameters</a> at run time.
                        </li>
                    </ul>
                    <p>
                        More information about handling the report items can be found in this <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/"
                                                                                                target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default SubReport;