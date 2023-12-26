/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class TerritorySales extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'territory-sales.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This demo shows the sales territory and its total sales using drilldown with table report in Bold Report Viewer.
                        Rows with
                        details are initially hidden with general summarized picture of the data, and data is drilled down to discover
                        the sales order details.
                    </p>
                    <ul>
                        <li>
                            The data is grouped as a hierarchy using the <code>Row Grouping</code> feature with table data region.
                        </li>
                        <li>
                            Interactive expand and collapse are achieved using the <code>Toggle</code> property in table data region.
                        </li>
                    </ul>
                    <p>
                        More information about the table data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default TerritorySales;