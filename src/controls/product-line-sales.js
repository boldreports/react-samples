/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class ProductLineSales extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/product-line-sales.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Product Line Sales RDL report represents the best performing sales people and stores using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank">Tablix</a> and <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/"
                                target="_blank">Chart </a>
                        report items.
                    </p>
                    <ul>
                        <li>The sales details are organized by category and sub-category of products using the concept of cascading
                            parameters. It allows users to filter Sub Category based on the selected Category.</li>
                        <li>Non cascading parameters namely start date and end date also used in this report.</li>
                    </ul>
                    <p>
                        More information about Cascading Parameters can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-parameters/create-cascading-parameter/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default ProductLineSales;