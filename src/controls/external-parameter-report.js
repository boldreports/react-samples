/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';
var parameterSettings = {
    hideParameterBlock: true
}
var didMount = false;
var startDate, endDate, category, subCategory;

class ExternalParameterReport extends Component {

    render() {
        if (this.props.content !== 'desc') {
            return (
                <div id="r-w-container">
                    <div id="r-w-sample-container">
                        <ej-sample>
                            <BoldReportViewerComponent
                                id="report-viewer"
                                reportServiceUrl={Globals.ServiceURL}
                                reportPath={'product-line-sales.rdl'}
                                toolbarSettings={{
                                    customGroups: window.Globals.TOOLBAR_OPTIONS.customGroups,
                                    toolbars: ej.ReportViewer.Toolbars.All & ~ej.ReportViewer.Toolbars.Vertical 
                                }}
                                toolBarItemClick={Globals.EDIT_REPORT} parameterSettings={parameterSettings}>
                            </BoldReportViewerComponent>
                        </ej-sample>
                    </div>
                    <div id="r-w-property-container">
                        <div id='spinner-container'></div>
                        <div id="r-w-property-title" style={{display: "none"}}>Parameters</div>
                        <div id="r-w-property-category" className="parameter-property" style={{display: "none"}}>
                            <div id="r-w-property-name"> Category</div>
                            <div id='r-w-property-value-category'>
                                <input type="text" id="category" />
                            </div>
                        </div>
                        <div id="r-w-property-subcategory" className="parameter-property" style={{display: "none"}}>
                            <div id="r-w-property-name">
                                Sub Category
                            </div>
                            <div id="r-w-property-value-subcategory">
                                <input type="text" id="subcategory" />
                            </div>
                        </div>
                        <div id="r-w-property-startdate" className="parameter-property" style={{display: "none"}}>
                            <div id="r-w-property-name">
                                Start Date
                            </div>
                            <div id="r-w-property-value-startdate">
                                <input id="startdate" />
                            </div>
                        </div>
                        <div id="r-w-property-enddate" className="parameter-property" style={{display: "none"}}>
                            <div id="r-w-property-name">
                                End Date
                            </div>
                            <div id="r-w-property-value-enddate" >
                                <input id="enddate" />
                            </div>
                        </div>
                        <input type="button" className="r-w-genearte e-control e-btn e-lib e-primary"
                            id="update" onClick={this.loadReport} value="View Report" style={{display: "none"}} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Product Line Sales RDL report represents the best performing sales people and stores using <a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">Tablix</a> and <a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/" target="_blank" rel="noreferrer">Chart </a>
                        report items.
                    </p>
                    <ul>
                        <li>
                            The sales details are organized by category and sub-category of products using the concept of external report parameters which is designed using <a href="https://ej2.syncfusion.com/javascript/documentation/api/drop-down-list"
                                target="_blank" rel="noreferrer">ejdropdownlist</a>. It allows users to filter Sub Category based on the selected Category.
                        </li>
                        <li>Non cascading parameters namely start date and end date also used in this report.</li>
                    </ul>
                    <p>
                        More information about handling the report items can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
    componentDidMount() {
        ejs.popups.createSpinner({ target: document.getElementById("spinner-container") })
        ejs.popups.showSpinner(document.getElementById("spinner-container"));
        var userAgent = window.navigator.userAgent;
        var isMobile = /mobile/i.test(userAgent);
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        if (wheelEvent && !isMobile) {
            window.addEventListener(wheelEvent, function () { }, { passive: false });
        }
        didMount = true;
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: Globals.ServiceURL + '/GetExternalParameterData',
            success: function (data) {
                if (didMount) {
                    startDate = new ejs.calendars.DatePicker({ value: new Date("1/1/2003"), width: "180px" });
                    endDate = new ejs.calendars.DatePicker({ value: new Date("12/31/2003"), width: "180px" });
                    var productCategoryList = JSON.parse(data.productCategoryDetail);
                    var productSubCategoryList = JSON.parse(data.productSubCategoryDetail);
                    category = new ejs.dropdowns.DropDownList({
                        dataSource: productCategoryList,
                        fields: {
                            text: "Name",
                            value: "ProductCategoryID",
                        },
                        index: 1,
                        width: "180px",
                        height: "10px",
                        showClearButton: false,
                        change: function (e) {
                            var categoryID = e.value;
                            var categoryDropDownList = productSubCategoryList.filter(({ ProductCategoryID }) => ProductCategoryID == categoryID);
                            if (subCategory.value != null)
                                subCategory.clear();
                            subCategory.dataSource = categoryDropDownList;
                        }
                    });
                    var subCategoryDropDownList = productSubCategoryList.filter(({ ProductCategoryID }) => ProductCategoryID == 1);
                    subCategory = new ejs.dropdowns.MultiSelect({
                        dataSource: subCategoryDropDownList,
                        fields: {
                            text: "Name",
                            value: "ProductSubcategoryID",
                        },
                        mode: 'CheckBox',
                        showClearButton: true,
                        showDropDownIcon: true,
                        showSelectAll: true,
                        width: "180px",
                        height: "30px",
                        value: [2],
                        placeholder: "Select Option"
                    });
                    startDate.appendTo('#startdate');
                    endDate.appendTo('#enddate');
                    category.appendTo('#category');
                    subCategory.appendTo('#subcategory');
                }
                ejs.popups.hideSpinner(document.getElementById("spinner-container"));
                $("#r-w-property-title").css("display", "block");
                $(".parameter-property").css("display", "inline-flex");
                $(".r-w-genearte").css("display", "block");
                didMount = false
            }
        });
    }
    loadReport = () => {
        var reportViewer = $("#report-viewer").boldReportViewer("instance");
        var productCategory = category.value.toString();
        var productSubcategory = (subCategory.value == null ? [''] : subCategory.value.map((i) => { return i.toString(); }));
        var startDatevalue = startDate.value;
        var endDateValue = endDate.value;
        var parameters = [{ name: 'ProductCategory', labels: [productCategory], values: [productCategory] }, { name: 'ProductSubcategory', labels: productSubcategory, values: productSubcategory }, { name: 'StartDate', labels: [startDatevalue], values: [startDatevalue] }, { name: 'EndDate', labels: [endDateValue], values: [endDateValue] }];
        reportViewer.model.parameters = parameters;
        reportViewer.reload();
    }
}
export default ExternalParameterReport;
