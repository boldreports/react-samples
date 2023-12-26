/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class TicketsSalesAnalysis extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'tickets-sales-analysis.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        Tickets Sales Analysis report shows the sales analysis of movie tickets using RDL line, bar, and doughnut chart
                        data regions and a table report item in Bold Report Viewer.
                    </p>
                    <ul>
                        <li>Alternate row formatting is achieved using the <b>Conditional IIF Statement</b> to alternate the background
                            color for a table data region,
                            which improves the readability of data.</li>
                        <li>The <code>TopN</code> filter is applied to bar chart to display the
                            <code> Top 5 Shows based on Tickets Sold</code>. More information on filtering data with chart data
                            region can be found in this <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/add-filters-to-chart-data-region/"
                                target="_blank" rel="noreferrer">documentation</a> section.</li>
                    </ul>
                    <p>
                        More information about chart data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default TicketsSalesAnalysis;