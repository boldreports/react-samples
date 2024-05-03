/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class WebsiteVisitorAnalysis extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'website-visitor-analysis.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        In a digital marketing environment, website visitor analysis is one of the key factors to analyze and monitor
                        how visitors are referred to a page, how long they spend in a page, and where they go next.
                    </p>
                    <p>
                        In this demo, such data of a fictitious e-commerce website are illustrated using often used data regions such as
                        pie, column, and smooth line charts and table in Bold Report Viewer.
                    </p>
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
export default WebsiteVisitorAnalysis;