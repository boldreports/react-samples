/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';
var parameterSettings = {
    hideParameterBlock: true
}

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
                                reportPath={'~/Resources/demos/Report/product-line-sales.rdl'}
                                toolbarSettings={Globals.TOOLBAR_OPTIONS}
                                toolBarItemClick={Globals.EDIT_REPORT} parameterSettings={parameterSettings}>
                            </BoldReportViewerComponent>
                        </ej-sample>
                    </div>
                    <div id="r-w-property-container">
                        <div id="r-w-property-title">Parameters</div>
                        <div id="r-w-property">
                            <div id="r-w-property-name"> Category</div>
                            <div id='r-w-property-value-category'>
                                <input type="text" id="category" />
                            </div>
                        </div>
                        <div id="r-w-property">
                            <div id="r-w-property-name">
                                Sub Category
                            </div>
                            <div id="r-w-property-value-subcategory">
                                <input type="text" id="subcategory" />
                            </div>
                        </div>
                        <div id="r-w-property">
                            <div id="r-w-property-name">
                                Start Date
                            </div>
                            <div id="r-w-property-value-startdate">
                                <input id="startdate" />
                            </div>
                        </div>
                        <div id="r-w-property">
                            <div id="r-w-property-name">
                                End Date
                            </div>
                            <div id="r-w-property-value-enddate" >
                                <input id="enddate" />
                            </div>
                        </div>
                        <input type="button" className="r-w-genearte e-button e-js e-ntouch e-btn-normal e-btn e-select e-widget"
                            id="update" onClick={this.loadReport} value="View Report" />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Product Line Sales RDL report represents the best performing sales people and stores using <a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank">Tablix</a> and <a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/" target="_blank">Chart </a>
                        report items.
                    </p>
                    <ul>
                        <li>
                            The sales details are organized by category and sub-category of products using the concept of external report parameters which is designed using <a href="https://help.syncfusion.com/api/js/ejdropdownlist"
                                target="_blank">ejdropdownlist</a>. It allows users to filter Sub Category based on the selected Category.
                        </li>
                        <li>Non cascading parameters namely start date and end date also used in this report.</li>
                    </ul>
                    <p>
                        More information about handling the report items can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/"
                            target="_blank">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
    componentDidMount() {
        var userAgent = window.navigator.userAgent;
        var isMobile = /mobile/i.test(userAgent);
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        if (wheelEvent && !isMobile) {
            window.addEventListener(wheelEvent, function () { }, { passive: false });
        }
        $("#startdate").ejDatePicker({ value: new Date("1/1/2003"), width: "180px" });
        $("#enddate").ejDatePicker({ value: new Date("12/31/2003"), width: "180px" });
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: Globals.ServiceURL + '/GetExternalParameterData',
            success: function (data) {
                var productCategoryList = JSON.parse(data.ProductCategoryDetail);
                var productSubCategoryList = JSON.parse(data.ProductSubCategoryDetail);
                $("#category").ejDropDownList({
                    dataSource: productCategoryList,
                    fields: {
                        text: "Name",
                        value: "ProductCategoryID",
                    },
                    change: function (args) {
                        $("#checkall").ejCheckBox({ checked: false });
                        var subCategoryDropDownList = productSubCategoryList.filter(({ ProductCategoryID }) => ProductCategoryID == $("#category").ejDropDownList("getSelectedValue"));
                        var subCategoryObj = $('#subcategory').data("ejDropDownList");
                        subCategoryObj.option("dataSource", subCategoryDropDownList);
                    },
                    width: "180px",
                    selectedIndex: 1,
                });
                var subCategoryDropDownList = productSubCategoryList.filter(({ ProductCategoryID }) => ProductCategoryID == 1);
                $("#subcategory").ejDropDownList({
                    dataSource: subCategoryDropDownList,
                    fields: {
                        text: "Name",
                        value: "ProductSubcategoryID",
                    },
                    showCheckbox: true,
                    selectedIndex: 1,
                    change: dropDownCheckAll,
                    headerTemplate: "<div id='checkall_wrap' ><input id ='checkall' type='checkbox'/></div>",
                    width: "180px",
                    watermarkText: "Select Option"
                });
                $("#checkall").ejCheckBox({ text: "Select All", change: selectAllSubCategory });
                var categoryObj = $('#category').data("ejDropDownList");
                categoryObj.option("selectedIndex", 1);
                var subCategoryObj = $('#subcategory').data("ejDropDownList");
                subCategoryObj.option("selectedIndex", 1);
            }
        });
        var flag;
        function selectAllSubCategory(args) {
            if (!flag) {
                var subCategoryObj = $("#subcategory").ejDropDownList("instance");
                if (args.isChecked) subCategoryObj.checkAll();
                else subCategoryObj.uncheckAll();
            }
        }
        function dropDownCheckAll(args) {
            var subCategoryObj = $("#subcategory").ejDropDownList("instance");
            var instance = $("#checkall").data("ejCheckBox");
            if (!args.isChecked) {
                flag = true;
                instance.setModel({ checked: false });
                flag = false;
            }
            if (subCategoryObj.getSelectedItem().length == subCategoryObj.getListData().length) {
                $("#checkall").ejCheckBox({ checked: true });
            }
        }
    }
    loadReport = () => {
        var reportViewer = $("#report-viewer").boldReportViewer("instance");
        var productCategory = $("#category").ejDropDownList("getSelectedValue");
        var productSubcategory = $("#subcategory").ejDropDownList("getSelectedValue").split(',');
        var startDate = $("#startdate").data("ejDatePicker").getValue();
        var endDate = $("#enddate").data("ejDatePicker").getValue();
        var parameters = [{ name: 'ProductCategory', labels: [productCategory], values: [productCategory] }, { name: 'ProductSubcategory', labels: productSubcategory, values: productSubcategory }, { name: 'StartDate', labels: [startDate], values: [startDate] }, { name: 'EndDate', labels: [endDate], values: [endDate] }];
        reportViewer.model.parameters = parameters;
        reportViewer.reload();
    }
}
export default ExternalParameterReport;