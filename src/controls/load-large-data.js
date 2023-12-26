/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class LoadLargeData extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'load-large-data.rdl'}
                    toolbarSettings={{
                        showToolbar: true,
                        items: ej.ReportViewer.ToolbarItems.All & ~ej.ReportViewer.ToolbarItems.Export & ~ej.ReportViewer.ToolbarItems.Print,
                        toolbars: ej.ReportViewer.Toolbars.All & ~ej.ReportViewer.Toolbars.Vertical,
                        customGroups: [{
                            groupIndex: 3,
                            Index: 1,
                            items: [{
                                type: 'Default',
                                cssClass: "e-icon e-edit e-reportviewer-icon ej-webicon CustomGroup",
                                prefixIcon: "e-viewer-icons edit",
                                id: "edit-report",
                                // Need to add the proper header and content once, the tool tip issue resolved.
                                tooltip: {
                                    header: 'Edit Report',
                                    content: 'Edit this report in designer'
                                }
                            }],
                            // Need to remove the css (e-reportviewer-toolbarcontainer ul.e-ul:nth-child(4)) once the group index issue resolved
                            cssClass: "e-show"
                        }]
                    }}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This report shows 100k records of sales order details using the Tablix report item in RDL report.
                    </p>
                    <ul>
                        <li>The table is displayed with a total row, and the sum of sales is calculated by aggregation of
                            <code> OrderQty</code> and <code>UnitPrice</code> data fields using the <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                                target="_blank" rel="noreferrer">Expression</a> support.</li>
                        <li>The Item total data text box is formatted in Currency format to enhance the report design.</li>
                    </ul>
                    <p>
                        More information about Tablix can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/" target="_blank" rel="noreferrer">documentation </a>
                        section.
                    </p>
                </div>
            );
        }
    }
}
export default LoadLargeData;
