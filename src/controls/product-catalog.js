/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class ProductCatalog extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/product-catalog.rdlc'}
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
                        This report shows Mountain bike products information using the <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank">Tablix</a> report item in RDLC report.
                    </p>
                    <ul>
                        <li>The table is displayed with Product no, image, name, size, weight and cost.</li>
                        <li>The data used in this table is a local JSON data.</li>
                    </ul>
                    <p>
                        More information about RDLC report can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/rdlc-report/" target="_blank">documentation </a>
                        section.
                    </p>
                </div>
            );
        }
    }
}
export default ProductCatalog;