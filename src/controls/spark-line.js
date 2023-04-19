/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class SparkLine extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/spark-line.rdlc'}
                    reportLoaded={Globals.onReportLoaded}
                    processingMode={'Local'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        A sparkline is a small embedded line graph that illustrates a single trend. In this report, sales data are
                        interpreted to visualize the sales trends using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/sparkline/"
                            target="_blank">Spark Line</a> report items.
                    </p>
                    <p>
                        More information about RDLC report can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/rdlc-report/" target="_blank">documentation </a>
                        section.
                    </p>
                </div>
            );
        }
    }
}
export default SparkLine;