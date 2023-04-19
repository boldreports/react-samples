/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class DynamicColumns extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/dynamic-columns.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                    Dynamic column tabular report demonstrates to change the number of columns at runtime using JavaScript Bold Report Viewer.
                    </p>
                    <ul>
                     <li>
                      Dynamic column is a feature that allows one to store different sets of columns for each row in a table.
                    </li>
                     <li>
                    In this table few columns are static and few can be varied, based on the column names selected in the parameter. This feature is achieved by changing the column visibility based on the parameter selected.
                     </li>
                    </ul>
                    <p>
                    More information about the Tablix data region can be found in this <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/tablix/"
                                                                                  target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default DynamicColumns;