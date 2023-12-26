/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class PatientExperienceAnalysis extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'patient-experience-analysis.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This report shows the Patient's satisfaction, average stay duration, count and average waiting time using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">Tablix</a> and <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/" target="_blank" rel="noreferrer">Chart </a>
                        report items.
                    </p>
                    <p>
                        Patient experience analysis is widely used to evaluate the quality of healthcare centers. The analysis data of
                        patient’s feedback about a healthcare unit is presented as a clear and precise report using data regions such as
                        doughnut, line charts and table in our Report Viewer.
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
export default PatientExperienceAnalysis;