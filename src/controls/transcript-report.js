/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class TranscriptReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'transcript-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Transcript Report for school encapsulates a detailed analysis of academic grades and performance for a specific period,
                        presented in a comprehensive RDL format.
                    </p>
                    <ul>
                        <li>The insightful examination of student transcripts is effectively communicated through a diverse range of
                            table or list report items, each contributing to a detailed and informative representation of academic
                            analytics.</li>
                    </ul>
                    <p>
                        Transcript report designing steps can be found in this <a
                            href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/list/design-ssrs-rdl-report-using-list/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default TranscriptReport;
