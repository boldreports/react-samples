/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class ProductDetails extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/product-details.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Product Details report lists the details defined for each product in database using the RDL table report
                        item.
                    </p>
                    <ul>
                        <li>Custom barcode report item is placed in a table cell to display the <code>ProductId</code>.</li>
                        <li>The total price value of each product is calculated based on the <code>OrderQty</code> and
                            <code>UnitPrice</code> data fields using <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                                target="_blank">expression</a>.</li>
                        <li>The price values in the product details are formatted in the <b>Currency </b> <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/format-data/"
                            target="_blank">format</a> to improve the readability of data.</li>
                    </ul>
                    <p>
                        More information about the Tablix data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default ProductDetails;