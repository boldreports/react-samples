/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class PersonalExpenseAnalysis extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'personal-expense-analysis.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The monthly expense data of an individual is presented as a report using embedded images, text boxes, chart, and
                        table data regions
                        in Bold Report Viewer. Thereby, it makes the process of analyzing and tracking monthly spending patterns
                        easier.
                    </p>
                    <ul>
                        <li>RDL External image embedding concept is used to display the image in report.</li>
                        <li>Text box report items with <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank" rel="noreferrer">expressions</a> are used to format the currency data fields.</li>
                        <li>Alternate row formatting is applied in the table data region using the <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/conditional-formatting-tablix-data-region/"
                            target="_blank" rel="noreferrer">Conditional Formatting</a> feature to alternate the background color for a table data
                            region, which improves the readability of data.</li>
                    </ul>
                    <p>
                        More information about handling images, text boxes, chart, and table report items can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default PersonalExpenseAnalysis;