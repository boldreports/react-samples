/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class CompanySales extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'~/Resources/demos/Report/company-sales.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        Company Sales report illustrates the product sales against a year using RDL Tablix report item in a
                        cross-tabular format. Report is designed with drill-up and drill-down capabilities to easily view aggregate data
                        of each quarterly sales in a year.
                    </p>
                    <ul>
                        <li>The <b>Row</b> and <b>column</b> grouping feature is used to create a cross-tabular format. The report is
                            designed with
                            single row group and column group, each has a parent and child group.</li>
                        <li><b>Aggregate</b> functions are used to calculate the total sales in row and column groups.</li>
                        <li>Sorting is applied to row groups to sort the product category and sub-category in descending and ascending
                            orders. More information about sorting data in matrix groups can be found in this <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/sort-data-in-tablix-data-region/#set-sort-expression-for-tablix-data-region"
                                target="_blank">documentation</a> section.
                        </li>
                    </ul>
                    <p>
                        Company Sales report designing steps can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/matrix/design-ssrs-matrix-report/#format-matrix-design"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}

export default CompanySales;