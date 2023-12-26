/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class DataBar extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'data-bar.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
        Data bars convey lot of information in a little space, and are mostly used in tables and matrices. In this report, sales data are interpreted to visualize the sales figures in a tabular format.
                    </p>
                    <p>
                        More information about the Databar report item can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/data-bar/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}

export default DataBar;