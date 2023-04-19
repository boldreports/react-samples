/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class CustomerSupportAnalysis extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/customer-support-analysis.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        Customer Support Analysis involves in monitoring and analyzing information to keep track of trends, resolution
                        time by a representative,
                        customer satisfaction score, and support representative performance. Such analysis data is illustrated using the
                        drill-through report concept
                        with table data region in Bold Reports Report Viewer.
                    </p>
                    <ul>
                        <li>You can navigate to another report from main report to view the detailed information on respective support
                            representative performance and ticket
                            details by clicking a representative name in the <code>Top 5 Support Representative</code> table data region
                            in the report design.</li>
                        <li>Sorting is applied to sort the <code>Representative Name</code> in
                            <code> Average resolution time (hrs) by Representative</code> chart.
                            More information about sorting data in matrix groups can be found in this <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/sort-data-in-tablix-data-region/#set-sort-expression-on-a-tablix-group"
                                target="_blank">documentation</a> section.</li>
                        <li>The <code>TopN</code> filter is applied to the table data region to display the
                            <code> Top 5 Satisfied Customer</code>. More information on filtering data with table
                            data region can be found in this <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/add-filters-to-tablix-data-region/#set-filter-on-tablix-data-region"
                                target="_blank">documentation</a> section.</li>
                    </ul>
                    <p>
                        More information about chart data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default CustomerSupportAnalysis;