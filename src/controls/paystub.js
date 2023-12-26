/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class Paystub extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'paystub.rdlc'}
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
                        Paystub RDLC report represents the paystub of a company in a single sheet using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">Tablix</a> report item.
                    </p>
                    <ul>
                        <li>
                            The Paystub are displayed dynamically using <a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                                target="_blank" rel="noreferrer">expression</a> with the text box report item.
                        </li>
                        <li>The data used in this table is a local JSON data.</li>
                    </ul>
                    <p>
                        More information about RDLC report can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/rdlc-report/" target="_blank" rel="noreferrer">documentation </a>
                        section.
                    </p>
                </div>
            );
        }
    }
}
export default Paystub;