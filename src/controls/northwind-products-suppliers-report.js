/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class NorthwindProductsandSuppliersReport extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/northwind-products-suppliers-report.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This demo showcases the details of products and suppliers of an organization and its sales ratio based on the market demand details using supported chart types
                        such as pyramid, bar, and column charts, and table report item in Bold Reports Report Viewer.
                    </p>
                    <ul>
                        <li>The font color is categorized using the <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/conditional-formatting-tablix-data-region/"
                            target="_blank">Conditional Formatting</a> feature in the <code>UnitInStock</code> column of table to differentiate the range of values.</li>
                        <li>The <code>TopN</code> filter is applied to the <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/add-filters-to-tablix-data-region/"
                            target="_blank">table</a> and <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/add-filters-to-chart-data-region/"
                                target="_blank">chart</a> data regions to display the top five data from database. Similarly, the <code>BottomN</code> filter is applied to display the least demand products
                            from database.</li>
                    </ul>
                    <p>
                        More information about chart data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default NorthwindProductsandSuppliersReport;