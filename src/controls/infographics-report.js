/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class InfographicsReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'infographics-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Infographics Report showcases the overall academic performance of a college through graphical representations, utilizing the Bold Reports <code>image</code> report item for visually engaging insights.
                    </p>
                    <ul>
                        <li>The report  presents  student demographics, academic achievements, and study preferences through visually engaging infographics, seamlessly incorporating the concept.</li>
                        <li>It provides visual insights into key metrics such as graduation rates, course interests, and study habits.</li>
                    </ul>
                    <p>
                        More information about the image report item can be found in this <a
                            href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/image-manager/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default InfographicsReport;