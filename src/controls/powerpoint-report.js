/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class PowerpointReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'powerpoint-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}
                    exportSettings={Globals.EXPORT_OPTIONS}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The PowerPoint RDL report represents the analytics of online food ordering for a specific region, presented in a PowerPoint format.
                    </p>
                    <ul>
                        <li>The comprehensive analysis of online food ordering was effectively conveyed through a variety of data visualization report items, each contributing to a rich and informative representation of the analytics.</li>
                        <li>The creation of each slide, akin to a page, is achieved through the utilization of the <code>PageBreak</code> property.</li>
                    </ul>
                    <p>
                        More information about Page break can be found in this <a
                            href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/compose-report/page-layout/#pagination"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default PowerpointReport;
