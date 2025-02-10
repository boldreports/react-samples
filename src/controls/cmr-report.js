/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class CMRReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'cmr-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                    The CMR International Consignment Note outlines the terms, responsibilities, and legal framework for international road freight transport under the CMR Convention, presented in a comprehensive RDL format.
                    </p>
                    <ul>
                        <li>The CMR International Consignment Note is effectively represented through a variety of table report items, each providing a detailed and informative view of the consignment details.</li>
                    </ul>
                    <p>
                        More information about the image report item can be found in this <a
                            href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/tablix/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default CMRReport;