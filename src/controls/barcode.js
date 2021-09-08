/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class Barcode extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/barcode.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        Custom Report Item allows you to add the functionality that is not natively supported in the RDL or extend the
                        functionality of existing controls in the RDL standard.
                    </p>
                    <p>
                        This report showcases the one-dimensional and two-dimensional barcode types rendered in our Report Viewer
                        through Custom Report Item.
                    </p>
                    <p>
                        More information about Barcode can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/barcode/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default Barcode;