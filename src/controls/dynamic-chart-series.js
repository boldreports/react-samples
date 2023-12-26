/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class DynamicChartSeries extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'dynamic-chart-series.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        This demo shows the VisitorsCount, PurchaserCount, AddedToCartCount by dynamically choosing the chart series.
                    </p>
                    <p>
                        More information about the Chart report item can be found in this <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-items/chart/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default DynamicChartSeries;