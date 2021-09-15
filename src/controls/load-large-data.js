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
                    reportPath={'~/Resources/demos/Report/load-large-data.rdlc'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This report shows 100,000 records of sales order details using the <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank">Tablix</a> report item in RDLC report.
                    </p>
                    <ul>
                        <li>The table is displayed with a total row, and the sum of sales is calculated by aggregation of
                            <code>OrderQty</code> and <code>UnitPrice</code> data fields using the <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                                target="_blank">Expression</a> support.</li>
                        <li>The Item total data text box is formatted in Currency format to enhance the report design.</li>
                    </ul>
                    <p>
                        More information about RDLC report can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/rdlc-report/" target="_blank">documentation</a>
                        section.
                    </p>
                </div>
            );
        }
    }
}
export default LoadLargeData;