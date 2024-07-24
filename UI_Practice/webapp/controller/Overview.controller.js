sap.ui.define(
  ["sap/ui/core/mvc/Controller", 
   "sap/ui/core/syncStyleClass",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, syncStyleClass, JSONModel, Filter, FilterOperator, MessageToast) {
    "use strict";

    return Controller.extend("practice.controller.Overview", {
      
      onInit: function () {
        var oModel = new JSONModel();
        this.getView().setModel(oModel, "customer");
      },

      onSave: function () {
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "practice.view.Dialog",
          }).then(function(oDialog) {
            syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
            return oDialog;
          }.bind(this));
        }
        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onCloseDialog: function () {
        this.byId("dialog").close();
      },

      onCustomerChange: function (oEvent) {
        var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
        this.byId("bookingTable").setBindingContext(oBindingContext);
      },

      onFilterCustomers: function (oEvent) {
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery && sQuery.length > 0) {
          aFilter.push(new Filter("CustomerName", FilterOperator.Contains, sQuery));
        }
      
        var oTable = this.byId("customerTable");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilter);
      },

      onDummyCreate: function(oEvent) {
        var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

        // Ideally in the 'create' method , we can actually insert data from a Form.
        this.getView().byId("idMockTable").getBinding("items").create({
          "CustomerID": "AKN",
          "CompanyName": "Test Company",
          "ContactName": "Anil Nagvanshi",
          "ContactTitle": "Owner",
          "Address": "Street 6/9",
          "City": "Bangalore",
          "Region": null,
          "PostalCode": "122334",
          "Country": "India",
          "Phone": "030-0074321",
          "Fax": "030-0076545"
        }).created().then(function () {
          MessageToast.show(oResourceBundle.getText("customerCreatedMessage"));
        });
      }
    });
  }
);
