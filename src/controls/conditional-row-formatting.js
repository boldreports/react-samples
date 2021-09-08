/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class ConditionalRowFormatting extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/conditional-row-formatting.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This demo illustrates the Conditional Formatting feature along with <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-parameters/add/"
                            target="_blank">Report Parameters</a> using the Tablix data region. Based on the country name selected in
                        the <code>Highlight Country</code>
                        parameter, the available customer details of the respective country are highlighted using conditional
                        formatting. It makes the report easier
                        to read horizontally and enhances the look and feel of report.
                    </p>
                    <ul>
                        <li><b>Conditional IIF Statement</b> is used to build <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank">expression</a> for background color, thereby it highlights the rows based on the
                            <code>Country Name</code> field.</li>
                    </ul>
                    <p>
                        Conditional row formatting report designing steps can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/conditional-formatting-tablix-data-region/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default ConditionalRowFormatting;